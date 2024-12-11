const captainModel = require("../models/captain.model")
const BlacklistTokenModel=require("../models/blacklist.token")

const createError = require("http-errors")

// Register new captain
const register = async (req, res, next) => {
    try {
        const { email, password, fullname, vehicle } = req.body

        // Check if captain already exists
        const existingCaptain = await captainModel.findOne({ email })
        if (existingCaptain) {
            throw createError(409, "Email already registered")
        }

        // Hash password
        const hashedPassword = await captainModel.hashPassword(password)

        // Create new captain
        const captain = new captainModel({
            email,
            password: hashedPassword,
            fullname,
            vehicle
        })

        await captain.save()
        
        // Generate token
        const token = captain.generateAuthToken()

        res.status(201).json({
            success: true,
            message: "Captain registered successfully",
            token
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "email already registered",
        
        })
    }
}

// Login captain
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // Find captain and include password field
        const captain = await captainModel.findOne({ email }).select('+password')
        if (!captain) {
            throw createError(401, "Invalid credentials")
        }

        // Verify password
        const isValidPassword = await captain.comparePassword(password)
        if (!isValidPassword) {
            throw createError(401, "Invalid credentials")
        }

        // Generate token
        const token = captain.generateAuthToken()
        res.cookie("token",token)

        res.json({
            success: true,
            message: "Login successful",
            token
        })

    } catch (error) {
        next(error)
    }
}
//captain profile
const Profile=async (req,res,next) => {
    res.status(200).json(req.captain)
}
// Update captain profile
const updateProfile = async (req, res, next) => {
    try {
        const updates = req.body
        delete updates.password // Prevent password update through this route

        const captain = await captainModel.findByIdAndUpdate(
            req.captain._id,
            updates,
            { new: true, runValidators: true }
        )

        res.json({
            success: true,
            message: "Profile updated successfully",
            captain
        })

    } catch (error) {
        next(error)
    }
}

// Logout captain
const logout = async (req, res, next) => {
    try {
        const token=req.cookies.token|| req.headers.authorization.split("")(1) //this will get token to check which user 
        await BlacklistTokenModel.create({token})
        // Clear the token cookie
        res.clearCookie("token")

        res.json({
            success: true,
            message: "Logged out successfully"
        })

    } catch (error) {
    res.json({success:false,
        message:"Error in logging out"
    })
    }
}

module.exports = {
    register,
    login,
    updateProfile,
    Profile,
    // updateLocation
    logout
}
const userModel=require("../models/user_model")
const userService=require("../services/user.services")
const {validationResult}=require("express-validator")
const BlacklistToken=require("../models/blacklist.token")

module.exports.RegisterUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { fullname, email, password } = req.body;

    try {
        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.CreateUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthtoken();
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message }); // Send the error message in the response
    }
};
module.exports.LoginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        
        // Verify we have both email and password
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Make sure to include password in the query
        const user = await userModel.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        // Debug log (remove in production)
        console.log('Password from request:', password);
        console.log('Stored hashed password:', user.password);
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        const token = user.generateAuthtoken();
        res.cookie("token",token)
        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Login error:', error);
        next(error);
    }
};
module.exports.getUserProfile = async (req, res, next) =>{
res.status(200).json(req.user)
}
module.exports.LogoutUser = async (req, res, next) => {
res.clearCookie("token");
const token=req.cookies.token|| req.headers.authorization.split("")(1) //this will get token to check which user 
await BlacklistToken.create({token})
res.status(200).json({message:"Logged out"})
}
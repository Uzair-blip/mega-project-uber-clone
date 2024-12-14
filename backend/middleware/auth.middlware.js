const userModel=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const BlacklistTokenModel=require("../models/blacklist.token")
const captainModel=require("../models/captain.model")
//middleware hum esliye bnaty an ye check krny k liye k konsa user authenticated a or usko uski profile dikhani
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" }); // Add return to stop further execution
    }

    const blacklisttoken = await BlacklistTokenModel.findOne({ token: token });
    if (blacklisttoken) {
        return res.status(401).json({ message: "Unauthorized" }); // Add return here too
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // This will decode token
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" }); // Add return here
        }
        
        req.user = user;
        return next(); // Call next middleware only once
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" }); // Add return here to prevent further execution
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const blacklisttoken=await BlacklistTokenModel.findOne({token:token})
    if(blacklisttoken){
        res.status(401).json({message:"Unauthorized"})

    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        
        if (!captain) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        req.captain = captain
        return next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}
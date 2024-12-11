const userModel=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const BlacklistTokenModel=require("../models/blacklist.token")
const captainModel=require("../models/captain.model")
//middleware hum esliye bnaty an ye check krny k liye k konsa user authenticated a or usko uski profile dikhani
module.exports.authUser=async (req,res,next) => {
    const token=req.cookies.token|| req.headers.authorization?.split("")(1) //this will get token to check which user 
    if(!token){
        res.status(401).json({message:"Unauthorized"})
    }
    const blacklisttoken=await BlacklistTokenModel.findOne({token:token})
    if(blacklisttoken){
        res.status(401).json({message:"Unauthorized"})

    }
    try {

        const decoded=jwt.verify(token,process.env.JWT_SECRET) //this will decode token
        const user=await userModel.findById(decoded._id)
        req.user=user
        return next()
    } catch (error) {
        res.status(401).json({message:"Unauthorized"})

    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    console.log(token)
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
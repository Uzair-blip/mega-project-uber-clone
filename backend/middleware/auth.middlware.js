const userModel=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//middleware hum esliye bnaty an ye check krny k liye k konsa user authenticated a or usko uski profile dikhani
module.exports.authUser=async (req,res,next) => {
    const token=req.cookies.token|| req.headers.authorization?.split("")(1) //this will get token to check which user 
    if(!token){
        res.status(401).json({message:"Unauthorized"})
    }
    const blacklisttoken=await userModel.findOne({token:token})
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
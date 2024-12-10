const express=require("express")
const router=express.Router()
const userController=require("../controller/user.controller")
const {body}=require("express-validator")
router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("first name should be at least 3 character"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters")

],
   userController.RegisterUser
)
module.exports=router
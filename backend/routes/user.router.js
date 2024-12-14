const express=require("express")
const router=express.Router()
const userController=require("../controller/user.controller")
const authMiddleware=require("../middleware/auth.middlware")

const {body}=require("express-validator")
router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email").normalizeEmail(),
    body("fullname.firstname").trim()
        .isLength({min: 3}).withMessage("First name should be at least 3 characters")
        .escape(),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters")
        .matches(/\d/).withMessage("Password must contain at least one number")
],
   userController.RegisterUser
)
router.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters")

],
userController.LoginUser
)

router.get("/profile",authMiddleware.authUser,userController.getUserProfile)
router.get("/logout",authMiddleware.authUser,userController.LogoutUser)

module.exports=router
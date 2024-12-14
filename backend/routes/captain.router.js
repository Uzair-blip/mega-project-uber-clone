const express = require("express")
const router = express.Router()
const { register, login, logout,Profile} = require("../controller/captain.controller")
const authMiddlware = require("../middleware/auth.middlware")

// Public routes
router.post("/register", register)
router.post("/login", login)

// Protected routes
router.get("/profile", authMiddlware.authCaptain, Profile)
router.get("/logout", authMiddlware.authCaptain, logout)

module.exports = router

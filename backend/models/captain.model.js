const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "First name should be at least 3 characters"]
        },
        lastname: {
            type: String,
            minLength: [3, "Last name should be at least 3 characters"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        type: {
            type: String,
            enum: ['car', 'motorcycle', 'rickshaw'],
            required: true
        },
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true,
            unique: true
        },
        model: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        }
    },
    socketId: {
        type: String
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        },
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    )
    return token
}

captainSchema.methods.comparePassword = async function(password) {
    if (!password) {
        throw new Error('Password is required')
    }
    
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw new Error('Password comparison failed')
    }
}

captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model("captain", captainSchema)

module.exports = captainModel

const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
 const userSchema=new mongoose.Schema({
fullname:{
    firstname:{
        type:String,
        required:true,
        minLength:[3,"first name should be at least 3 words "]
    },
    lastname:{
        type:String,
        minLength:[3,"last name should be at least 3 words "]
    },
},
email:{
    type:String,
    required:true,
    unique:true,
    }
,
password:{
    type:String,
    required:true,
    select:false
},
socketId:{
    type:String
}

})

userSchema.methods.generateAuthtoken = function () {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    ); // Token expires in 24 hours
    return token;
};

userSchema.methods.comparePassword = async function(password) {
    if (!password) {
        throw new Error('Password is required');
    }
    
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

userSchema.statics.hashPassword=async (password) => {
    return await bcrypt.hash(password,10)     
}
const userModel=mongoose.model("user",userSchema)

module.exports=userModel
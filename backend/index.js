const dotenv=require("dotenv")
dotenv.config()
const express=require("express")
const cors=require("cors")
const connectDB=require("./db/db")
const cookieParser=require("cookie-parser")
const userRoutes=require("./routes/user.router")
const app=express()
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB()
app.get("/",(req,res)=>{
    res.send("hey")
})
app.use("/user",userRoutes)
module.exports=app

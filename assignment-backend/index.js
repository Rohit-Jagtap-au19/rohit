import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myuserdb",{
    useNewUrlParser : true,
    useUnifiedTopology : true
},()=>{
    console.log("Connected to myuserdb")
})

// creating user schema 
const userSchema = mongoose.Schema({
    name : String,
    email: String,
    password : String
})

//creating model
const User = new mongoose.model("User",userSchema)

//Routes

app.post("/login", (req, res)=>{
    const {email ,password} = req.body
// to check our log in data is present in our db or not
    User.findOne({email:email}, (err, user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Successfull",user:user})
            } else{
                res.send({message:"Incorrect Password"})
            }
        }else{
            res.send({message:"You Need To Register First"})
        }
    })

})

app.post("/register", (req, res)=>{
    const {name, email ,password} = req.body

//to cheack if user's email is already present in our data or it is a new user
    User.findOne({email:email},(err, user)=>{
        if(user){
            res.send({message:"Your Email is Already Registred"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered, Now You Can Login"})
                }
            })
        }
    })
    
})
app.listen(9002,()=>{
    console.log("started at 9002")
})
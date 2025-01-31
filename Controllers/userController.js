const User = require('../models/User')
const bcrypt = require('bcryptjs')


const register = async (req,res) => {
   const {name,email,password} = req.body
    
   try {
    const userExist = await User.findOne({email:email})
    if(userExist){
       return  res.status(409).json({
            "message":"User Already Exist",
        })
    }

    const hashPassword = await bcrypt.hash(password,10)

    //process with user regikstration if not found
    const newUser = new User({name:name,email:email,password:hashPassword})
    await newUser.save()

    return res.status(201).json({
        "user":newUser,
        "message":"User registration successfyully"
    })
    
   } catch (error) {
    return res.status(500).json({
        "error":error.message,
        "message":"Error registrering the user"
    })
   }
   
}

const login = (req,res) => {
    console.log("test")
}

module.exports = {register,login}
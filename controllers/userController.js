const User = require("../models/userSchema")
const bcrypt =require("bcrypt")




exports.newUser = async (req, res) => {
    const{username,email,password} = req.body
    const hashedPassword = await bcrypt.hash(password, 8)
    const user = await User.create({
        username,
        email,
        password:hashedPassword

    })
    res.status(200).json({
        success: true,
        user
    })
}


exports.getAllUsers=async(req,res)=>{
    const users= await User.find()
    res.status(200).json(users)
}

exports.deleteUser = async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message:"user deleted successfully"
    })
}
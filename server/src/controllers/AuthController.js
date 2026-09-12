import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const register=async (req, res) => {
  try{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({success:false, message:"Please provide all required fields"});
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({success:false, message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const result=await User.create({name,email,password:hashedPassword});
    res.status(201).json({success:true, message:"User registered successfully", data: {
    id: result._id,
    name: result.name,
    email: result.email,
  },});
  }catch(error){
   return res.status(500).json({success:false, message: error.message});
  }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if (!email || !password) { return res.status(400).json({ success: false, message: "Please provide email and password", }); }
        const user=await User.findOne({email});
        if(!user){
           return res.status(400).json({success:false, message:"User not found"});
        }
        const checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(400).json({success:false, message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
        res.status(200).json({success:true, message:"Login successful", token});
    }catch(error){
        return res.status(500).json({success:false, message: error.message});
    }
}
export  {register, login};
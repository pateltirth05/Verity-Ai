import User from "../models/User.js";
import bcrypt from "bcryptjs";
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
    res.status(500).json({success:false, message: error.message});
  }
}
export  {register};
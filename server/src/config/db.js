import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const connectDb=async()=>{
 try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully ",mongoose.connection.host);


 }
 catch(error){
    console.log("MongoDB connection failed ",error.message);
process.exit(1)
 }
}
export default connectDb;
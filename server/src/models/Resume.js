import mongoose from "mongoose";

const resumeSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    fileName:{
        type:String,
        trim:true,
        required:true
    },
    fileUrl:{
        type:String,
        trim:true,
        required:true
    },
    extractedText:{
        type:String
    },
},{timestamps:true})

const Resume=mongoose.model("Resume",resumeSchema)

export default Resume
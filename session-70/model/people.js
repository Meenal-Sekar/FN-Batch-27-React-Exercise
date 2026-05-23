

const mongoose=require('mongoose')

//schema---> structure of Database

const userSchema=new mongoose.Schema({
    name:{
            type:String,
            required:true,
        },
   
         email:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true
        },
        jobRole:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    
})

const UserModel=mongoose.model("profile",userSchema)

module.exports=UserModel
const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
   
const app=express();
app.use(express.json());//middlewares

const S1=require('./model/people')  //collection

dotenv.config();

if(mongoose.connect('mongodb://localhost:27017/studentDB'))
    {
        console.log("Database is connected");
    }

//How to insert the record
app.post("/insert",(req,res)=>
    {
    
        const people=new S1(req.body);  //get request information from reques area saved in kitty
        people.save().then(() =>{
         
            res.send("Data added successfully");
        }).catch((err)=>
        {
            res.json(err);
        });
    });

app.listen(process.env.PORT,()=>
{

    console.log('server is connected')
})

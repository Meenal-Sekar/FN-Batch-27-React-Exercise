const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
   
const app=express();
app.use(express.json());//middlewares

const S1=mongoose.model('records',{name:String,age:Number,city:String,status:Boolean});

dotenv.config()

if(mongoose.connect('mongodb+srv://meenal-sekar:VishuVishu1805@cluster0.vskqmqg.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log("Database is connected");
    }

//how to insert record in the mongodb
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

//retrieve all the records from the database
app.get("/retr",async(req,res)=>
{
    try{
        const jack=await S1.find()    
        res.json(jack); 
    }catch(err)
    {
        res.send(err)
    }

})
//delete the record using id

app.delete("/delete/:id",async(req,res)=>
    {
    const kitty=await S1.findByIdAndDelete(req.params.id);
    res.json(kitty);
    console.log('deleted');
    });

//update the details
    app.put("/update", async(req,res)=>
        {
        const user=await S1.findByIdAndUpdate(req.body.id,
        {
        name:req.body.name,
        city:req.body.city,
        age:req.body.age,
        status:req.body.status
        },
        {new:true}//accept the new details of s1
        
        );
        res.json(user);
        console.log("updated");
        });
    
app.listen(process.env.PORT,()=>
{
    console.log('server has connected')
})
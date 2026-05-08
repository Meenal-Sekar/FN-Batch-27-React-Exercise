const express=require('express')

const router=express.Router()   //  middleware 

const albumData=require('../model/albumData')

router.get("/",(req,res)=>
{

    res.json(albumData);
    console.log('100 albumdata records will visible now')

})

router.get("/:id",(req,res)=>
    {
        const data1=albumData.find((u1)=>u1.id == req.params.id); //url 78
        res.json(data1);

    
    })

     router.get("/sk/:id",(req,res)=>
        {
        const data2=albumData.filter((u2)=>u2.userId==req.params.id);
        res.json(data2);
        });

module.exports=router


//router--control--model   (router)---server.js
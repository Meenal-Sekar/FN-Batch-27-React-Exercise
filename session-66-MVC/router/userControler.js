const express=require('express')

const router=express.Router()   //  middleware 

const userData=require('../model/userData')

router.get("/",(req,res)=>
{
        res.json(userData)
})

router.get("/:id",(req,res)=>
    {
        const data1=userData.find((u1)=>u1.id == req.params.id); //url 7
        res.json(data1);

    
    })

    



module.exports=router

const express=require('express')
const app=express()


app.get("/aruna",(req,res)=>
{
    res.send('<h1>Hi I am a server</h1>')
})

app.listen(4000,()=>
{
    console.log('Server is connected');
})
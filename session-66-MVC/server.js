const express=require('express')
const app=express()


const albumRouter=require('./router/albumControler')
const userRouter=require('./router/userControler')

app.get("/",(req,res)=>
{
    res.sendFile(__dirname +"/html/index.html");

})

app.use("/vijay",albumRouter)   //middleware  (applicaion level mw)

app.use("/ajith",userRouter)


app.listen(3000,()=>
{
    console.log('Server is running on the port 3000')
})
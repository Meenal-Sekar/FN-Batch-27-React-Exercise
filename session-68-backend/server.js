const express=require('express')
const app=express()


app.use(express.json())

const productRouter=require('./router/product.router')
const userRouter=require('./router/user.router')

app.use("/jack",productRouter)
app.use("/rose",userRouter)


app.listen(3000,()=>
{
    console.log('server is running')
})
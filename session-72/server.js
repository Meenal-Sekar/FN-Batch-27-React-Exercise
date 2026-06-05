const express=require('express')
const app=express()

const dotenv=require('dotenv')
const studentRouter=require('./router/studentRouter')
const connectDB=require('./config/db')
const errorHandler=require('./middleware/errormiddlware')


// ENV CONFIG
dotenv.config();

connectDB();


// EXPRESS APP

app.use("/str",studentRouter)


// ERROR MIDDLEWARE
app.use(errorHandler);



app.listen(process.env.PORT,()=>
{
    console.log('server is running')
})
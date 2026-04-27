
const express =require('express') //library 

const app=express();    //function calling   --> app


//let PORT=6067;

//how to connect port number and server

app.get("/",(req,res)=>

{
    res.send('Welcome to Backend Classes')
    
})
app.get("/meena",(req,res)=>

{
    res.send(`<h1>Welcome to Backend World</h1>`)
    
})

app.listen(3000,()=>
{
        console.log(`server is connected on 3000`);
})
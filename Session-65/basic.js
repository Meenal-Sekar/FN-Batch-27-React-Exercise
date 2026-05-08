const express=require('express')
const app=express();

app.get("/",(req,res)=>
{
    res.send('<h1>Hi I am from get router</h1>');
    console.log('Hi I am from get router')
})
app.get('/home', (req, res) =>
 {
 res.send('Welcome to Home Page');
});


app.post("/",(req,res)=>
{
    res.send('Hi I am post router ');

})
app.post("/suresh",(req,res)=>
{
    res.send('Hi I am post-post router ');

})
app.put("/",(req,res)=>
    {
    res.send('Hi I am put router ');
    })

    app.patch("/happy",(req,res)=>
        {
        res.send('Hi I am patch router ');
        })

        app.delete("/sad",(req,res)=>
            {
            res.send('Hi I am delete router ');
            })

app.listen(4000,()=>
{
    console.log('server is running')
})
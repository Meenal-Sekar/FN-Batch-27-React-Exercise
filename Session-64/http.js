const http=require('http')
const fs=require('fs');

const app=http.createServer((req,res)=>
{
        if(req.url === "/hello")
        {
            res.write('<h1>This is hello route</h1>');
            res.end();
            return;
        }
        if(req.url==="/jack")
        {
            res.write("<h1>This is jack route</h1>");
                res.end();
                return;
        }
        
        if(req.url==="/rose")
        {
            res.write("<h1>This is rose route</h1>");
                res.end();
                return;
        }
        res.write(
            `
            <div>
                <h1 style="color:blue">Hi I am server port no:4000 </h1>
                <p>Welcome to Backend</p>
            </div>
            `
        );
    
})

app.listen(4000,()=>
{
    console.log("Server is running");
})
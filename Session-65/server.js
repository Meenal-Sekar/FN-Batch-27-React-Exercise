const express=require('express')
const app=express()

app.use(express.json())   // build in middleware

let users = [
 { id: 1, name: "Meena",job:"Developer" }, //0
 { id: 2, name: "John",  job:"Tester" },//1
 { id: 3, name: "seetha", job:"Admin" }, //2

];
//get all records from the array
app.get("/getusers",(req,res)=>
{
    res.json(users)
    console.log('All details visible now')
})
// add newuser to the array

app.post('/postusers', (req, res) => 
    {
 const newUser = {
   id: users.length + 1,
   name: req.body.name,
   job:req.body.job
 };
 users.push(newUser);
 res.status(201).json(newUser);
 
});


// ✅ DELETE - Remove user

app.delete('/getusers/:id', (req, res) => {
 users = users.filter(u => u.id != req.params.id);
 res.send("User record has deleted");
});

//edit  


// ✅ PUT - Replace entire userrecord

app.put('/getusers/:id',(req,res)=>
{
 const index = users.findIndex(u => u.id == req.params.id);

 if (index !== -1) 
{
   users[index] = { id: Number(req.params.id), name: req.body.name , job:req.body.job};
   res.json(users[index]);
 } else {
   res.status(404).send("User not found");
 }

})


////patch
// ✅ PATCH - Update partial data
app.patch('/getusers/:id', (req, res) =>
 {
 const u1 = users.find(u => u.id == req.params.id);

 if (u1) 
{
   u1.name = req.body.name || u1.name;
   u1.job=req.body.job || u1.job;
   
   res.json(u1);
 } 
 else
 {
   res.status(404).send("User not found");
 }
});




app.listen(4000,()=>
{
    console.log('Server is running')
})
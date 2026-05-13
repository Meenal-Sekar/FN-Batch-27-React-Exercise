const express=require('express')
const app=express();

app.use(express.json());  //Built-in middleware

let students = [
  { id: 1, name: "Meena" },
  { id: 2, name: "Hari" },
   { id: 3, name: "Seetha" },
  { id: 4, name: "Ramya" },
   { id: 5, name: "Rani" },
  { id: 6, name: "kala" },
   { id: 7, name: "Reena" },
  { id: 8, name: "Arunkumar" },
   { id: 9, name: "lalitha" },
  { id: 10, name: "prakash" }
];

// write a get method with router name as getdetails and print value as json

//middleware function

const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
};

app.use(logger)

app.get("/getstudent",(req,res)=>
{
    res.json(students)
})

// use try catch method

app.post("/adduser",(req,res)=>
{
    try{
          const { id, name } = req.body;
           students.push({ id, name });
             res.status(201).json({ message: "New record added" });
    }
    catch(err)
    {
        next(err)
    }  
})

// delete   : id
app.delete("/del/:id",(req,res)=>
{
        students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted" });

})


//update

app.put("/update/:id", (req, res) => 
    {
  const id = req.params.id;

  students = students.map(s =>
    s.id == id ? { ...s, ...req.body } : s
  );
  res.json({ message: "Updated" });
})


app.listen(3000,()=>
{
    console.log('Server is running')
})



const express=require('express')
const app=express();
const jwt=require('jsonwebtoken')
const bodyParser=require('body-parser')  // third party middlware support for backend
const dotenv=require('dotenv')

dotenv.config()

app.use(bodyParser.json());

const users = [
    { id: 1, username: 'jack', password: 'jack@123' },
    { id: 2, username: 'rose', password: 'rose@123' },
     {id:3,username:'ajwin',password:'ajwin@123'},
     {id:3,username:'meena',password:'meena@123'}
  ];


  
  //check wheather user is authernticated or not
  app.post('/login', (req, res) =>
    {
   const { username, password } = req.body;
 
   // Check if the user exists
   const user = users.find(u => u.username === username && u.password === password);
 
   if (!user) 
   {
     return res.status(401).json({ message: 'Invalid credentials' });
   }
    // User is authenticated, generate JWT

   const token = jwt.sign({ id: user.id, username: user.username }, 
       process.env.JWT_SECRET, { expiresIn: '1h' });
 
   res.json({ message: 'Authenticated successfully', token });

   })

 // Middleware to verify JWT token   [header.payload.signature]
const authenticateJWT = (req, res, next) => 
    {
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(403).json({ message: 'Access denied' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      req.user = user;
      next();
    });
  };


  //// Protected route that requires authentication
  app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: `Welcome to batch-42 class ${req.user.username}`, 
        user: req.user });
  });

  


app.listen(process.env.PORT,()=>
{
    console.log('server is running');
})
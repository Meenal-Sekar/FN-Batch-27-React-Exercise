const express=require('express')

const router=express.Router()   //middleware

const authentication=require('../security/authentication.security')



router.post("/register", authentication.registerAPI);

router.post("/login", authentication.loginAPI);





module.exports=router
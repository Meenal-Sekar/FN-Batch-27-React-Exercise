const express=require('express')

const router=express.Router()   //middleware

const productController=require('../controller/product.controller')

router.get("/jk", productController.allProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);



module.exports=router

// model--- conrolle-->router--->server   mcrs
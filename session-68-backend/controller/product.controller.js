const express=require('express')

const productModel=require('../model/product.model')

// GET ALL API
const allProduct = (req, res) =>
 {
    res.status(200).json(productModel);
}
//POST API
const createProduct = (req, res) => {
    const { name, price, category } = req.body;

    const newProduct = {
        id: productModel.length + 1,
        name,
        price,
        category
    };
    productModel.push(newProduct);
    res.status(201).json(newProduct);
}


// Delete Product
const deleteProduct = (req, res) => 
{
    const id = parseInt(req.params.id);

    const product = productModel.findIndex(data => data.id === id); //2
   

    if(product === -1)
    {
        return res.status(404).json({message: "Product not found"});
    }

    const deletedProduct = productModel.splice(product, 1);
    console.log(deletedProduct)

    res.status(200).json({message: "Product deleted"});
}

//updateAPI
const updateProduct = (req, res) => 
    {
    const id = parseInt(req.params.id);
    const{name, price, category} = req.body;

    const product = productModel.find(data => data.id === id);
     console.log(product);

    if(!product)
    {
        return res.status(404).json({message: "Product not found"});
    }

    // Update logic
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;

    res.status(200).json(product);

}


module.exports={allProduct,updateProduct,deleteProduct,createProduct}



//model --->router(controller)---->server

//model ---> controller---->router----->server
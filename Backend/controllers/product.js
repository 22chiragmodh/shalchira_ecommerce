const {Product}= require("../models/product");

//create a new product

exports.createProduct =async (req,res)=>{
    const newproduct=new Product(req.body);

    try{
  const saveprod=await newproduct.save();
  res.status(200).json(saveprod);
    }catch(e){
  res.status(404).json(e);
    }


}
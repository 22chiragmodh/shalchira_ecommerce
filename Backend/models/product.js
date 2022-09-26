const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodctname:{type:'string',required:true,unique:true,},

    price:{
        type:'number',required:true,
    },

    description:{type:'string',required:true},
  
    catagories:{type:'Array',required:true},

    imageUrl:{type:'string',required:true},

    size:{type:'string'},

    color:{type:'string'}



});


const Product=mongoose.model('Product',ProductSchema);
module.exports = Product;
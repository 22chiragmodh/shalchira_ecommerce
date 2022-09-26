const router = require('express').Router();
const { createproducts } = require('../controllers/product');
const { verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin, } = require('../middleware/verifyToken');


router.post('/create', createproducts);
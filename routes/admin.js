const path = require('path')

const express = require("express")

const router = express.Router()

// router.post
const  rootDir = require('../utl/path')
router.get('/add-product',(req, res, next)=>{
    console.log("in the onother middle ware")
     res.sendFile(path.join(rootDir,'views','add-product.html'))
     });

    router.post('/add-product',(req,res,next)=>{
        console.log(req.body)
        // const productName = req.body.productName;
        // const productSize=req.body.productSize;
        // console.log('Product Name:', productName);
        // console.log('Product Size:', productSize);
        res.redirect('/')
    });

    module.exports = router;
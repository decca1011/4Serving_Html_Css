const path = require('path')

const express = require("express")

const router = express.Router()

// router.post
const  rootDir = require('../utl/path')

router.get('/contact',(req, res, next)=>{
    console.log("in the onother middle ware")
     res.sendFile(path.join(rootDir,'views','contact.html'))
     });

    router.post('/contact',(req,res,next)=>{
     //  res.send('Thanks for submitt')
        res.sendFile(path.join(rootDir, 'views', 'submit.html'));
      
    });

    module.exports = router;
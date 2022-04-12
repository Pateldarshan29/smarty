// const express = require('express');
// const Author = require('../models/Author');
// const router = express.Router(); 

// router.post('/',async(req,res)=>{
//     console.log("darshan");
//     const newauthor = new Author(req.body)
//     try {
//         const addauthor = await newauthor.save()
//         res.status(200).json(addauthor) 
//     } catch (error) {
//         console.log("error in add author.",error);
//     }
// })

// router.get('/',async(req,res)=>{
//     try {
//         const allauthor = await Author.find()
//         res.status(200).json(allauthor) 
//     } catch (error) {
//         console.log("error in add all authors",error);
//     }        
// })

// router.get('/author/:id',async(req,res)=>{
//     try {
//         const allauthor = await Author.find()
//         res.status(200).json(allauthor) 
//     } catch (error) {
//         console.log("error in add all authors",error);
//     }        
// })




const express = require("express");
const router = new express.Router();
const Author = require("../models/Author");

router.post("/author", function(req, res, next){
    const author = new Author({
        name : "Darshan",
    });
    author.save().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/author", function(req, res, next){
    Author.find().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/author/:id", function(req, res, next){
    Author.findById(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

router.patch("/author/:id", function(req, res, next){
    Author.findByIdAndUpdate(req.params.id, {name: "PC"}).then(function(result){
        res.send(result);
    }).catch(next);
});

router.delete("/author/:id", function(req, res, next){
    Author.findByIdAndRemove(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

// module.exports = router;
module.exports = router ;
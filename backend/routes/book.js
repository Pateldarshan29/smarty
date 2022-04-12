// const express = require('express');
// const Book = require('../models/Book');
// const router = express.Router(); 

// router.post('/book',async(req,res)=>{

// })

// router.get('/book',async(req,res)=>{
//     try {
//         const allbook = await Book.find()
//         res.status(200).json(allbook) 
//     } catch (error) {
//         console.log("error in add all books",error);
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

// module.exports = router ;


const express = require("express");
const router = new express.Router();
const Book = require("../models/Book");

router.post("/book", function(req, res, next){
    const book = new Book(req.body);
    book.save().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/book", function(req, res, next){
    Book.find().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/book/:id", function(req, res, next){
    Book.findById(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

router.patch("/book/:id", function(req, res, next){
    Book.findByIdAndUpdate(req.params.id, req.body).then(function(result){
        res.send(result);
    }).catch(next);
});

router.delete("/book/:id", function(req, res, next){
    Book.findByIdAndRemove(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

module.exports = router;
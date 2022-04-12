const express = require("express");
const router = new express.Router();
const Book = require("../models/Book")   

router.post("/book",async(req, res, next) => { 
    const book = await new Book(req.body);
    console.log(req.body);
    await book.save().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/book", async(req, res, next) => {
    await Book.find().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/book/:id", async(req, res, next) => {
    await Book.findById(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

router.patch("/book/:id", async(req, res, next)=>{
    await Book.findByIdAndUpdate(req.params.id, req.body).then(function(result){
        res.send(result);
    }).catch(next);
});

router.delete("/book/:id", async(req, res, next) => {
    await Book.findByIdAndRemove(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

module.exports = router;
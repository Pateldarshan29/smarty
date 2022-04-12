const express = require("express");
const router = new express.Router();
const Author = require("../models/Author");
const Book = require("../models/Book") 
const bodyParser = require('body-parser')


router.post("/author", async(req, res, next)=>{
    const author = await new Author(req.body);
    await author.save().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/author", async(req, res, next)=>{
    await Author.find().then(function(result){
        res.send(result);
    }).catch(next);
});

router.get("/author/:id", async(req, res, next)=>{
    const arr = await Book.find()
    const newData = arr.filter((val)=>{
        if(val.authorId == req.params.id){
            return val
        }
    })
    res.send(newData)
});

router.patch("/author/:id", async(req, res, next)=>{
    Author.findByIdAndUpdate(req.params.id, req.body).then(function(result){
        res.send(result);
    }).catch(next);
});

router.delete("/author/:id", async(req, res, next)=>{
    Author.findByIdAndRemove(req.params.id).then(function(result){
        res.send(result);
    }).catch(next);
});

module.exports = router ;
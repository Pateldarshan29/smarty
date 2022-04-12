const mongoose = require("mongoose");
const {Schema} = mongoose;

const authorSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    authorId:{
        type: Number,
        required: true,
        unique: true
    }
});

const Author = mongoose.model('author', authorSchema);
module.exports = Author
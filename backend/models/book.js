const mongoose = require("mongoose");
const {Schema} = mongoose;

const bookSchema = new Schema({
    bookId: {
        type:String | Number,
    },
    bookName: {
        type:String,
        
    },
    ISBN: {
        type:String,
        unique: true    
    }
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book
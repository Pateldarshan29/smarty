const mongoose = require("mongoose");
const {Schema} = mongoose;

const bookSchema = new Schema({
    bookName: {
        type:String,
        required: true
    },
    ISBN: {
        type:String,
        unique: true,
        required : true    
    },
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true      
    }
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book
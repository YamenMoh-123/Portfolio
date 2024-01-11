import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    rating: Number,
    order: Number

});


let Book = mongoose.model('Books', bookSchema);
export default Book;


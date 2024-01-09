import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
   // id: Number,
    title: {
        type: String,
        required: true,
    },
    content: String,
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=> new Date()

    }

});


let Blog = mongoose.model('Blogs', blogSchema);
export default Blog;


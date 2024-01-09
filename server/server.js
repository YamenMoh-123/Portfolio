// bycrypt, cores, mongo, jwt

import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import Blog from "./models/blogs.js";
import bodyParser from "body-parser";
import { userInfo } from "os";
import { error } from "console";


const pwd = process.env.MONGO_PWD;
mongoose.set('strictQuery', false);
await mongoose.connect(`mongodb+srv://yamenmoh250:${pwd}@portfoliodb.50nadqe.mongodb.net/?retryWrites=true&w=majority`)



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/blog", async (req,res) => {
    try{
        const posts = await Blog.find();
        res.json(posts);
    }
    catch(err){
        console.log(err);
    }
});


app.post("/blog/create", async (req, res)=>{
    try{
    const newPost = new Blog(req.body);
    await newPost.save();
    res.status(201).json(newPost);
    }
    catch(err){
        res.status(400).json({message:error.message});
    }
});



app.delete("/blog/:id/delete", async (req,res)=>{
    const idToDelete = req.params.id;
    console.log(req.params.id);

    await Blog.deleteOne({ _id: idToDelete});    
   

});





app.listen(4000, ()=>{
    console.log("Running on port 4000");
});
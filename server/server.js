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
const uri = `mongodb+srv://yamenmoh250:${pwd}@portfoliodb.50nadqe.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(uri).then(console.log("Connected")).catch( (err)=>console.log("error connecting to database"));



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

app.get("/blog/all", async (req,res)=>{

    try{
         const result = await Blog.countDocuments()
         const data = {postCount: result};
        res.json(data);
       
        
    }
    catch(err){

    }
});


app.get("/blog/:id", async (req,res)=>{
    try{
        
        const curId = req.params.id;
        const currentBlog = await Blog.findById(curId);
        //console.log(currentBlog)
        //res.status().json(currentBlog);
        res.send(currentBlog);
    }
    catch(err){
        
    } //send json
});



app.patch("/blog/edit/:id", async(req,res)=>{
    const curId = req.params.id;
    console.log(req.params);
    const data = req.body;
    console.log("this is a patch");
    try{
       // console.log(curId);
        await Blog.findByIdAndUpdate(curId, {title: data.title, content: data.content});
        // CONFIRM BLOG CREATION AND DELETION
        
        console.log("patched");
    }
    catch(err){
        res.sendStatus(500);
    }
});



app.post("/blog/create", async (req, res)=>{
    try{
        console.log("this is a post");
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
    //console.log(req.params.id);

    await Blog.deleteOne({ _id: idToDelete});    
   

});





app.listen(4000, ()=>{
    console.log("Running on port 4000");
});
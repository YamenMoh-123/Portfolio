// bycrypt, cores, mongo, jwt

import express from "express";
import mongoose from "mongoose";

//mongoose.connect(mongodb+srv:yamenmoh250://{process.env.MONGO_PWD}@cluster0.c2xudpt.mongodb.net/?retryWrites=true&w=majority);


const app = express();


app.get("/blog/1", (req,res) => {
    res.json({key: "nivro"});
});







app.listen(4000, ()=>{
    console.log("Running on port 4000");
});
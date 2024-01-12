// bycrypt, cores, mongo, jwt

import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import Blog from "./models/blogs.js";
import User from "./models/users.js";
import bodyParser from "body-parser";
import { userInfo } from "os";
import { error } from "console";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

const pwd = process.env.MONGO_PWD;
const uri = `mongodb+srv://yamenmoh250:${pwd}@portfoliodb.50nadqe.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(uri).then(console.log("Connected")).catch( (err)=>console.log("error connecting to database"));




const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const saltrounds = 10;

let refreshTokens = [];  // offload to database

app.get("/test",authenticateToken,(req, res)=>{  // test this when have input
    console.log("MINE");
    res.json("FEBU");  // retuyrning database data
    
});

app.post("/test/login",  (req,res)=>{

    // after authenticatoin
    const username = req.body;
    const user = {user:username};
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);

    refreshTokens.push(refreshToken);

    res.json({accessToken: accessToken, refreshToken: refreshToken});
})

app.post("/token", (req,res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null){
        res.sendStatus(401)
    }
    if(refreshToken.includes(refreshToken)){
        res.rendStatus(403);
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err,user)=>{
        if(err){
            console.log(err);
        }
        const accessToken = generateAccessToken({name: user.name});
        res.cookie("token", accessToken, {
            httpOnly: true
        });

        return res.redirect("/");
    })
});

app.delete("/delete", (req,res)=>{ // remove
    // remove current refresh token
})



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

app.get("/book/all", async (req,res)=>{


    try{
         const result = await Book.countDocuments()
         const data = {bookCount: result};
         res.json(data);
    }
    catch(err){
        //
    }
});


app.get("/blog/:id", async (req,res)=>{
    try{
        const curId = req.params.id;
        const currentBlog = await Blog.findById(curId);
        res.send(currentBlog);
        console.log(currentBlog);
    }
    catch(err){
        
    } //send json
});



app.post("/signUp", async (req,res)=>{

    try{
        const secret = process.env.B_SECRET;
        var pwdDB = secret + req.body.password;

        const hashedPWD = await bcryptjs.hash(pwdDB, saltrounds)
        
        const data = {firstName: req.body.firstName, lastName: req.body.lastName, userName: req.body.userName, password: hashedPWD};
        const currentUser = new User(data);
        await currentUser.save();
        res.sendStatus(200);
    }
    catch(err){
        res.status(400)
        res.json(err);
        console.log(err);
    }
    
});

app.post("/authenticate", async (req,res)=>{  // implement error catching ^

    try{

    const userName = req.body.userName;
    const user = await User.findOne({userName: userName});
  
    

    const secret = process.env.B_SECRET;
    const pwdUser = secret + req.body.password;
    const pwdDB = user.password;


    bcryptjs.compare(pwdUser, pwdDB, function(err, match){
        if(err){

        }
        if(match){
            console.log("match");
            const username = req.body;
            const user = {user:username};
            const accessToken = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);

            refreshTokens.push(refreshToken);
            //res.sendStatus(200);
            res.json({accessToken: accessToken, refreshToken: refreshToken});

            

        }
        else{
            console.log("no match");
        }
    });
}

catch(err){
    res.status(400);
    console.log(err);
}








});



app.patch("/blog/edit/:id", async(req,res)=>{
    const curId = req.params.id;
  
    const data = req.body;
 
    try{
       
        await Blog.findByIdAndUpdate(curId, {title: data.title, content: data.content});
        // CONFIRM BLOG CREATION AND DELETION
        
    
    }
    catch(err){
        res.sendStatus(500);
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
    //tryy
    const idToDelete = req.params.id;
    await Blog.deleteOne({ _id: idToDelete});
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_SECRET, {expiresIn: "15m"});
}

app.get("/authenticateToken", authenticateToken, async (req,res)=>{
    try{
        const currUser = req.user.user.userName;
        const user = await User.findOne({userName: currUser});
        const permit = user.authenticated;
        res.json({permitted: permit});

    }
    catch(err){
        console.log(err);
    }
    
});

function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (token==null) {
        console.log("B HUIGFERVBU");
        return res.sendStatus(401);
        
    }

    jwt.verify(token,process.env.ACCESS_SECRET, (err, user) =>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}




app.listen(4000, ()=>{
    console.log("Running on port 4000");
});
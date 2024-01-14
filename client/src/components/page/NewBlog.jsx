import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import BlogCreate from '../blog/BlogCreate';
import Layout from '../layout/Layout';
import {useParams} from "react-router-dom";

function NewBlog() {
    var isEdit = false;
    
    const {id} = useParams();
    if(typeof id !== 'undefined'){
        isEdit = true;
    }
    
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[imageURL, setImageURL] = useState('');


    async function setIntitialData(){
        if(isEdit){
        const currentData = await axios.get(`/blog/${id}`);
       
        setTitle(currentData.data.title);
        setContent(currentData.data.content);
        setImageURL(currentData.data.image)
        }
    }
    useEffect(()=>{
        setIntitialData();
    },[]);
    

    async function handleSubmit(event){
        event.preventDefault();    
    if(!isEdit){
        try{
            await axios.post("/blog/create", {title: title, content: content, image: imageURL}).then(navigate("/blog"));   
        }
        catch(err){
            //
        }
    }
    else{
        try{
            await axios.patch(`/blog/edit/${id}`, {title: title, content: content, image: imageURL}).then(navigate("/blog"));
        }
        catch(err){

        }
    }
    }

    async function handleTitle(event){
        setTitle(event);
        
    }
    
    async function handleContent(event){
        setContent(event);
    }

    async function handleImage(event){
        setImageURL(event);
    }

  return (
    <div class = "back">
    

    <Layout>
    <BlogCreate title = {title} content = {content} image = {imageURL} onTitle = {handleTitle} onContent = {handleContent} onImage ={handleImage} onSubmit = {handleSubmit}/>
    </Layout>


    </div>

  )
}

export default NewBlog
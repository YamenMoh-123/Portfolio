import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import BlogCreate from '../blog/BlogCreate';
import Layout from '../layout/Layout';
import {useParams} from "react-router-dom";

function NewBlog() {
    var isEdit = false;
    
    const {id} = useParams();
    {console.log(id)}
    if(typeof id !== 'undefined'){
        isEdit = true;
    }
    
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');

    {console.log(isEdit)}

    async function setIntitialData(){
        if(isEdit){
        const currentData = await axios.get(`/blog/${id}`);
        {console.log(currentData.data)}
        setTitle(currentData.data.title);
        setContent(currentData.data.content);
        }
    }
    useEffect(()=>{
        setIntitialData();
    },[]);
    

    async function handleSubmit(event){
        event.preventDefault();    
    if(!isEdit){
        try{
            await axios.post("/blog/create", {title: title, content: content}).then(navigate("/blog"));   
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        try{
            await axios.patch(`/blog/edit/${id}`, {title: title, content: content}).then(navigate("/blog"));
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


  return (
    <div>
    {/*for for input, submit cancel, navigation,
        value = {form, firstname}
        on change = ()=>{
            setForm({
                ...form, first name: e target val
            })
        }
    */ }

    <Layout>
    <BlogCreate title = {title} content = {content} onTitle = {handleTitle} onContent = {handleContent} onSubmit = {handleSubmit}/>
    </Layout>


    </div>

  )
}

export default NewBlog
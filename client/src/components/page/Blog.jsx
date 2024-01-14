import React, {useState, useEffect, useContext} from 'react';
import BlogPost from '../blog/BlogPost';
import axios from "axios";
import Layout from "../layout/Layout";
import {useNavigate } from "react-router-dom";
import BlogHeader from '../blog/BlogHeader';
import {AuthContext} from '../AuthProvider';
import "./page.css"



function Blog() {
    let navigate = useNavigate();
    var [blogPost, setBlogs] = useState([{}]); // const

    const {userPermitted} = useContext(AuthContext)
    

    async function onLoad(){
        try{
            const result = await axios.get("/blog");
            const blog = result.data;
          
           setBlogs(result.data);
            }
            catch (err){
                //
            }
    }

    useEffect(()=>{
        onLoad();
    }, [])

    async function handleDelete(curId){
        try{
     
        
        await axios.delete(`/blog/${curId}/delete`).then(
            setBlogs (blogPost.filter(blog => blog._id !== curId))
            );
        }
        catch(err){
            //
        }
    }

    async function handleExpand(curId){
        const path = `/blog/${curId}`
        navigate(path);

    }

    async function handleEdit(curId){
        const path = `/blog/edit/${curId}`
        navigate(path);
    }

    function handleClick(){
        const path = "/blog/create"
        navigate(path);
    }



  return (
    <div class = "back">
        <Layout>
            
        <BlogHeader permitted = {userPermitted} handleClick = {handleClick}/>
        {blogPost.map((blog, index)=>{
           
                return(<BlogPost key={index} index ={index} value = {blog} permitted = {userPermitted} onDelete = {handleDelete} onExpand = {handleExpand} onEdit = {handleEdit}/>)
            
          
            
        })}
        </Layout>

    </div>
  )
}

export default Blog
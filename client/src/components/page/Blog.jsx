import React, {useState, useEffect} from 'react';
import BlogPost from '../blog/BlogPost';
import axios from "axios";
import Layout from "../layout/Layout";
import {useNavigate } from "react-router-dom";
import BlogHeader from '../blog/BlogHeader';



function Blog() {
    let navigate = useNavigate();
    var [blogPost, setBlogs] = useState([{}]);

    async function onLoad(){
        try{
            const result = await axios.get("/blog");
            const blog = result.data;
          
           setBlogs(result.data);
            }
            catch (err){
                console.log(err);
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
            {console.log(err)}
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
    <div>
        <Layout>
            
        <BlogHeader handleClick = {handleClick}/>
        {blogPost.map((blog, index)=>{
          
            return(<BlogPost key={index} index ={index} value = {blog} onDelete = {handleDelete} onExpand = {handleExpand} onEdit = {handleEdit}/>)
        })}
        </Layout>

    </div>
  )
}

export default Blog
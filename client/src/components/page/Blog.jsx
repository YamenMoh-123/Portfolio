import React, {useState, useEffect} from 'react';
import BlogPost from '../blog/BlogPost';
import axios from "axios";
import Layout from "../layout/Layout";


function Blog() {
    var [blogPost, setBlogs] = useState([{}]);

    async function onLoad(){
        try{
            const result = await axios.get("/blog");
            const blog = result.data;
           {console.log(result.data)}
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
        //{console.log(curId)}
        
        await axios.delete(`/blog/${curId}/delete`).then(
            setBlogs (blogPost.filter(blog => blog._id !== curId))
            );
        }
        catch(err){
            {console.log(err)}
        }
    }



  return (
    <div>
        <Layout>
        {blogPost.map((blog, index)=>{
          
            return(<BlogPost key={index} value = {blog} onDelete = {handleDelete}/>)
        })}
        </Layout>

    </div>
  )
}

export default Blog
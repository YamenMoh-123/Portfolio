//single blog for blogitem.jsx page

import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";


function BlogExpanded() {
    const [post, setPost] = useState('');

    const{id} = useParams();

    async function getBlog(){
        const result = await axios.get(`/blog/${id}`)
        setPost(result.data);
    }
   
    useEffect(()=>{
        
        getBlog();
    },[]);
    
    
    

  return (
    //// EXPANDED BLOG VIEW LINKED TO BLOGITEM.JSX
    <div>{post.title}</div>
  )
}

export default BlogExpanded
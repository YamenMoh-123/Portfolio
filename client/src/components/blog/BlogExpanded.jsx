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

    {console.log(post)}
    
   

  return (

    
    <div>
      
      <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">{post.title}</h1>
    <p class="lead">
      Find Out More About This Topic Below
    </p>
  </div>

  <div class = "container blogContent" >
    <div class = "blogContentN col-md-8 my-5 px-3">
    <p>{post.content}</p>
    </div>
    <div class = "container blogContentN col-md-4 my-5 px-3">
      <img src = "https://picsum.photos/200/300" className="blogImg"></img>
      <img src = "https://picsum.photos/200/300" className="blogImg"></img>
    </div>
    
  </div>

</div>
      
      
      
      </div>
  )
}

export default BlogExpanded
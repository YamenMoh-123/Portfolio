import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";


function BlogExpanded() {
    const [post, setPost] = useState('');
   
    var imageUrl = 'https://picsum.photos/1000/1000' // default image url if none specified
    



    const{id} = useParams();

    async function getBlog(){ 
        const result = await axios.get(`/blog/${id}`)
        setPost(result.data);
    }
   
    useEffect(()=>{
        
        getBlog();
    },[]);



    if( typeof post.image !== 'undefined'){
     imageUrl = post.image;
    }
      
   

  return (

  
    <div>
      
      <div class="container my-5">
  <div class="p-5 text-center rounded-4 text-bg-dark">
    <h1 class="text-white fw-bold ">{post.title}</h1>
    <p class="text-white fs-6">
      Find Out More About This Topic Below
    </p>
  </div>

  <div class = "container blogContent" >
    <div class = "blogContentN col-md-8 my-5 px-3 text-white">
    <p className= "fs-5" >{post.content}</p>
    </div>
    <div class = "container blogContentN col-md-4 my-5 px-3">
      <img src = {imageUrl}  className="blogImg"></img>
     
    </div>
    
  </div>

</div>
      
      
      
      </div>
  )
}

export default BlogExpanded
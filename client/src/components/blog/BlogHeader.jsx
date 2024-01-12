import React from 'react'
import "./blogStyle.css"

function BlogHeader(props) {
  

    function handleClick(){
        props.handleClick();
    }


  return (
    <div class = "container blogHeader">
        <h1 class="h1 text-center mt-5 mb-4 text-white fw-bold" id="pageHeaderTitle">Welcome To My Blog</h1>
        {props.permitted ? 
        <button type="button" class="btn btn-lg headerButton" style = {{background: "rgb(40, 75, 99)", color: "white"}} onClick = {handleClick}>Create Post</button>
        :
        <></>
        }    
        </div>
  )
}

export default BlogHeader
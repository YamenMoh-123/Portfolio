import React from 'react'
import "./blogStyle.css"

function BlogHeader(props) {

    function handleClick(){
        props.handleClick();
    }


  return (
    <div class = "container blogHeader">
        <h1 class="h1 text-center mt-5 mb-4" id="pageHeaderTitle">Welcome To My Blog</h1>
        <button type="button" class="btn btn-primary btn-lg headerButton" onClick = {handleClick}>Create Post</button>
    </div>
  )
}

export default BlogHeader
//creation component for newblog.jsx and editblog.jsx

import React from 'react'
import "./blogStyle.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"




function BlogCreate(props) {

    const modules = {
        toolbar: [
            [{"header": [1,2, false]}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{"list" :"ordered"}, {"list": "bullet"}],
            ["link", "image"],
            ["ckean"]
        ]
    };

    const formats =[
        "header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"
    ];



function handleTitle(event){
    props.onTitle(event.target.value);
}

function handleContent(event){
    props.onContent(event.target.value)
}
function handleSubmit(event){
    props.onSubmit(event)
}

  return (
    <div class = "blogCreate">
<div class="container contact-form">
            
            <form method="post">
                <h3>Submit a Blog Post</h3>
               <div class="row" align="center">
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Subject *" onChange = {handleTitle} value = {props.title}/>
                        </div>
                        <div>
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Description *" style={{"width": "100%", "height": "150px"}} onChange = {handleContent} value = {props.content}></textarea>
                        </div>
                    </div>
                        
                        <div class="form-group my-3 col-md-8" >
                            <input type="submit" name="btnSubmit" class="btnContact" value="Submit" onClick = {handleSubmit}/>
                        </div>
                    </div>
                    
                </div>
            </form>
        <div class = "container inputFormContainer">
            <ReactQuill className = "inputForm" value = {props.content} modules = {modules} formats = {formats} />
            </div>
</div>

    </div>
  )
}

export default BlogCreate
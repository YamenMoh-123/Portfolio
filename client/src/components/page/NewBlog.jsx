import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function NewBlog() {
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        try{
            {console.log(title)}
            await axios.post("/blog/create", {title: title, content: content});
            navigate("/blog");
            {console.log('worked')}
        }
        catch(err){
            console.log(err);
        }
    }

    async function handleTitle(event){
        setTitle(event.target.value);
        
    }

    async function handleContent(event){
        setContent(event.target.value);
    }


  return (
    <div>NewBlog
        <form onSubmit = {handleSubmit}>
    <input type = "text" value = {title} onChange = {handleTitle}></input>
    <textarea value = {content} onChange = {handleContent}> </textarea>
    <button type = "submit"></button>

        </form>


    </div>

  )
}

export default NewBlog
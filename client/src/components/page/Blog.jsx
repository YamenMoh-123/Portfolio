import React, {useState, useEffect} from 'react'
import BlogPost from '../blog/BlogPost'
import axios from "axios";

let test = [1,2,3];

function Blog() {
    var [blogPosts, setBlogs] = useState([{}]);

    async function onLoad(){
        try{
            const result = await axios.get("/blog/1");
           {console.log(result.data.key)}
           // alert(result.data);
            }
            catch (err){
                console.log(err);
            }
    }

    useEffect(()=>{
        onLoad();
    })

  return (
    <div>
        {test.map(()=>{
            return(<BlogPost />)
        })}

    </div>
  )
}

export default Blog
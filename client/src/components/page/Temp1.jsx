import React from 'react'
import axios from 'axios';

function Temp1() {
  var result = ''

  async function k (){
    const accessToken = localStorage.getItem("accessToken");
    const reponse = await axios.get("/test", {headers:{"Authorization": `Bearer ${accessToken}`}});
    //await axios.get("/test");
  } 
  k();
    
  return (
    <div>temp</div>
  )
}

export default Temp1
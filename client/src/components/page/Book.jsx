import React, {useState, useEffect, useContext} from 'react'
import BookItem from '../book/BookItem'
import axios from "axios"
import {AuthContext} from '../AuthProvider';
import Layout from '../layout/Layout';
import BookHeader from '../book/BookHeader';
import "./page.css"

function Book() {

 
  const [books, setBooks] = useState([{}]);
  const [select, setSelect] = useState();
  const {userPermitted} = useContext(AuthContext)

  async function onLoad(selected){

    try{
        const result = await axios.get("/book", {
          params: {
            select: selected
          }
        });
        const blog = result.data;
      
       setBooks(result.data);
        }
        catch (err){
          //
        }
}

useEffect(()=>{
    onLoad();
}, [])


  function handleSelect(event){
    setSelect(event);
    onLoad(event);
  }


  return (
    <div class = " back" >
      <Layout>
        <BookHeader  select = {select} handleSelect = {handleSelect} permitted = {userPermitted}/>
        <div class = "container bookT">
        {books.map((book, index)=>{
          return(<BookItem key={index} value = {book}/>)
      })}
      </div>
      </Layout>
    </div>
  )
}

export default Book
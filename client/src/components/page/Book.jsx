import React, {useState, useEffect, useContext} from 'react'
import BookItem from '../book/BookItem'
import axios from "axios"
import {AuthContext} from '../AuthProvider';
import Layout from '../layout/Layout';
import BookHeader from '../book/BookHeader';

function Book() {


  const [books, setBooks] = useState([{}]);
  const {userPermitted} = useContext(AuthContext)

  async function onLoad(){
    try{
        const result = await axios.get("/book");
        const blog = result.data;
      
       setBooks(result.data);
        }
        catch (err){
            console.log(err);
        }
}

useEffect(()=>{
    onLoad();
}, [])




  return (
    <div class = " back">
      <Layout>
        <BookHeader  permitted = {userPermitted}/>
        <div class = "container d-flex">
    {books.map((book, index)=>{
          
          return(<BookItem key={index} value = {book}/>)
      })}
      </div>
      </Layout>
    </div>
  )
}

export default Book
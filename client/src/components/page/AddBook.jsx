


import React, {useState} from 'react';
import NewBook from '../book/NewBook';
import Layout from '../layout/Layout';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddBook() {

    let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');
    const [order, setOrder] = useState('');

    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handleScore(event){
        setScore(event.target.value);
    }

    function handleOrder(event){
        setOrder(event.target.value);
    }



    async function handleSubmit(event){
        try{
            await axios.get("/searchBook", {params: {
                title: title, score: score, order: order}});
                navigate("/books");
        }
        catch(err){

        }
    }




  return (
    <div class = "back">
        <Layout>
        <NewBook title = {title} score = {score} order = {order} onTitle = {handleTitle} onScore = {handleScore} onOrder = {handleOrder} onSubmit = {handleSubmit}/>
    </Layout>
    </div>
  )
}

export default AddBook
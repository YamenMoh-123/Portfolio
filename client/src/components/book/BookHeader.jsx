import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function BookHeader(props) {
    let navigate = useNavigate();

    function handleSelect (event){
      
      props.handleSelect(event.target.value);
    }


  return (
    <div class = "container d-flex justify-content-between text-bg-dark rounded-4 my-5">
        <h1 class="h1 text-center my-5 mb text-white fw-bold" id="pageHeaderTitle">Check Out My Books Below</h1>
        <div class = "col-lg-2">
        <select class="form-select text-white fw-bold mt-5 px-3" aria-label="Default select example" onChange  ={handleSelect} style = {{background: "rgb(40, 75, 99)"}} >
        <option selected>Sort By</option>
        <option value="1" >Order Asc</option>
        <option value="2">Order Dsc</option>
        <option value="3">Score Asc</option>
        <option value="4">Score Dsc</option>
        </select>
        </div>

    {props.permitted ? 
    <button type="button" class="btn btn-lg headerButton my-5 mb-4" style = {{background: "rgb(40, 75, 99)", color: "white"}} 
        onClick = {()=>{navigate("/addbook")}}>Add Book</button>
    :
    <></>
    }    </div>
  )
}

export default BookHeader
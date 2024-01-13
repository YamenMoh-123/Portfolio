import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookHeader(props) {
    let navigate = useNavigate();


// align buttong make path with navigate

  return (
    <div class = "container d-flex justify-content-between text-bg-dark rounded-4 my-5">
        <h1 class="h1 text-center my-5 mb text-white fw-bold" id="pageHeaderTitle">Check Out My Books Below</h1>
    {props.permitted ? 
    <button type="button" class="btn btn-lg headerButton my-5 mb-4" style = {{background: "rgb(40, 75, 99)", color: "white"}} 
        onClick = {()=>{navigate("/addbook")}}>Add Book</button>
    :
    <></>
    }    </div>
  )
}

export default BookHeader
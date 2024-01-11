import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function SignIn(props) {
    let navigate = useNavigate();

    function handleUser(event){
        props.onUser(event);
    }

    function handlePassword(event){
        props.onPassword(event);
    }

    function handleSubmit(event){
        props.onSubmit(event);
    }




  return (
    <div>


        <div className = "container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value = {props.userName} onChange = {handleUser}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value = {props.password} onChange = {handlePassword}></textarea>
            </div>
            <button onClick = {handleSubmit}>click me</button>
            <button>sign up</button>
        </div>




    </div>
  )
}

export default SignIn
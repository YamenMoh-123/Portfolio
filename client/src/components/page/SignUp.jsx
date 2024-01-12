import React, {useState, useEffect} from 'react'
import SignUpForm from '../UserInput.jsx/SignUpForm'
import axios from "axios";
import {useNavigate} from "react-router-dom"

function SignUp() {

  let navigate = useNavigate();
 

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



  
    function handleUser(event){
      setUserName(event.target.value);
    }

    function handleFirst(event){
      setFirstName(event.target.value);
    }

    function handleLast(event){
      setLastName(event.target.value);
    }
  
    function handlePassword(event){
      setPassword(event.target.value);
    }

    function handleError(){
      setErrorMessage('');
    }

  
    async function handleSubmit(){  // could split into seperate funciton

      if(password != ""){

      try{

      var data = {userName:userName, password: password, firstName: firstName, lastName: lastName}
      const answer = await axios.post("/signUp", data);
      navigate("/");
      }
      catch(err){
        if(err.response.data.code){
          setErrorMessage("Please enter a unique username");
        }
        
        console.log("User Creation Failed");
        {console.log(err)}//
      }
    }
  }
  
  
  
    
  
    return (
      <div>
        <SignUpForm userName = {userName} password = {password} firstName = {firstName} lastName = {lastName} 
        onUser = {handleUser} onFirst = {handleFirst} onLast = {handleLast} onPassword = {handlePassword}
         onSubmit = {handleSubmit} errorMessage = {errorMessage} handleError ={handleError}/>
  
      </div>
    )
}

export default SignUp
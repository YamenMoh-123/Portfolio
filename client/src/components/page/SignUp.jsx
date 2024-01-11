import React, {useState, useEffect} from 'react'
import SignIn from '../UserInput.jsx/SignInForm'
import axios from "axios";

function SignUp() {

 
  
  
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
  
  
    function handleUser(event){
      setUserName(event.target.value);
    }
  
    function handlePassword(event){
      setPassword(event.target.value);
    }
  
  
  
    async function handleSubmit(){  // could split into seperate funciton

      var data = {userName:userName, password: password}
      const answer = await axios.post("/signUp", data);
      
    }
  
  
  
    
  
    return (
      <div>
        <SignIn userName = {userName} password = {password} onUser = {handleUser} onPassword = {handlePassword} onSubmit = {handleSubmit}/>
  
      </div>
    )
}

export default SignUp
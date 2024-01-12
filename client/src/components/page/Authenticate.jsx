import React, {useState, useEffect, useContext} from 'react'
import SignIn from '../UserInput.jsx/SignInForm'
import axios from "axios";
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';


function Authenticate() {

  const {isLogged,userPermitted, logIn} = useContext(AuthContext)
  let navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleUser(event){
    setUserName(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  async function handleSubmit(){  // could split into seperate funciton

    if(password !=''){
    try{

    const data = {userName: userName, password: password}
    
    const answer = await axios.post("/authenticate", data);
    const {accessToken, refreshToken} = answer.data;
  

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    logIn(accessToken);
    
    navigate("/");

    }
    catch(err){

    }
  }
}

  
  return (
    <div>
  <SignIn userName = {userName} password = {password} onUser = {handleUser} onPassword = {handlePassword} onSubmit = {handleSubmit}/>
    </div>
  )
  

}



 
export default Authenticate
import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

function Header() {
  let navigate = useNavigate();


  const {isLogged, logOut} = useContext(AuthContext)
  
  

  return (
    <div>
        <div class="container">

    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <img src = "https://picsum.photos/seed/picsum/200/300" class="bi" width="40" height="32"></img>
        </a>
      </div>

     

      <div class="col-md-3 text-end">
        {isLogged?(

        <button type="button" class="btn" 
        style = {{fontSize:"18px", borderRadius:"9px", width: "100px", background: "rgb(40, 75, 99)", color: "white"}} 
        onClick = {logOut}>Sign Out</button>

        ): (
        <button type="button" class="btn" 
        style = {{fontSize:"18px", borderRadius:"9px", width: "100px", background: "rgb(40, 75, 99)", color: "white"}} 
        onClick = {()=>{navigate("/authenticate")}}>Sign In</button>
        )}
      </div>
    </header>
  </div>
        
        
        
    </div>
  )
}

export default Header
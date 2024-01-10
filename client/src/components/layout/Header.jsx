import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  let navigate = useNavigate();

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
        <button type="button" class="btn btn-primary" style = {{fontSize:"18px", borderRadius:"9px", width: "95px"}} onClick = {()=>{navigate("/authenticate")}}>Login</button>
      </div>
    </header>
  </div>
        
        
        
    </div>
  )
}

export default Header
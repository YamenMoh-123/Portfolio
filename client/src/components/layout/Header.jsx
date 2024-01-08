import React from 'react'

function Header() {
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
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
        
        
        
    </div>
  )
}

export default Header
import React from 'react'
import "./layoutStyle.css"


function Footer() {
  return (
    <div class="container pb-1">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
         <svg class="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        
      </a>
      <span class="mb-3 mb-md-0 text-white">© 2024</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

      <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/yamen.moh/"><i class="fa-brands fa-instagram text-white"></i><svg class="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://github.com/YamenMoh-123/"><i class="fa-brands fa-github text-white"></i><svg class="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.linkedin.com/in/yamenmohi"><i class="fa-brands fa-linkedin text-white"></i><svg class="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer
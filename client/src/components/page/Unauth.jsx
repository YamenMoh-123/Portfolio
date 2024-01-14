import React from 'react'
import Layout from '../layout/Layout'
import "./page.css"

function Unauth() {

  return (
    
    <div class = "back">
   <Layout>

    <div style = {{height : "100vh"}} >
    <body class="d-flex h-100 text-center back">
    
  <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
  </header>
  

  <main class="px-3 rounded-4">
    <h1 class = "text-white">Unauthorized</h1>
    <p class="lead text-white">It seems you are unauthorized to access this page</p>
    <p class="lead">
    </p>
  </main>

  <footer class="mt-auto text-white-50">
  </footer>
</div>
</body>

</div>
</Layout>
</div>
  )
}

export default Unauth
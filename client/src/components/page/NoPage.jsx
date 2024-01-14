import React from 'react'
import Layout from '../layout/Layout'

function NoPage() {
    return (
    
        <div class = "back">
       <Layout>
    
        <div style = {{height : "100vh"}} >
        <body class="d-flex h-100 text-center back">
        
      <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
      </header>
      
    
      <main class="px-3 rounded-4">
        <h1 class = "text-white">404</h1>
        <p class="lead text-white">Sorry, It seems this page does not exist</p>
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

export default NoPage
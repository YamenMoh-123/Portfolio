import React from 'react'
import "./landingStyle.css"

function Project() {
  return (

    
      
    <div class="container px-4 py-5">
      <h2 class="pb-2 pP border-bottom"></h2>
    

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 text-bg-dark rounded-4">
      <div class="col d-flex flex-column align-items-start gap-2 " >
        <h2 class="fw-bolder fs-1 text-white" >A Little About Me</h2>
        <p class="text-white">Check out my blog for more about these topics!</p>
      
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3 colorC">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#collection"></use>
              </svg>
            </div>
            <h4 class="fw-semibold mb-0">Computer Science</h4>
            <p>4 years of coding + studying C, Java, Python</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3 colorC">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#gear-fill"></use>
              </svg>
            </div>
            <h4 class="fw-semibold mb-0 ">Networking</h4>
            <p>2 years studying, CCNA + CCNP ENCOR</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3 colorC">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#speedometer"></use>
              </svg>
            </div>
            <h4 class="fw-semibold mb-0">Technical Support</h4>
            <p>3 years experience in technical device repair</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3 colorC">
              <svg class="bi" width="1em" height="1em">
                <use xlinxHref="#table"></use>
              </svg>
            </div>
            <h4 class="fw-semibold mb-0">Customer Support</h4>
            <p>4 years experience in delivering excellent support</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Project
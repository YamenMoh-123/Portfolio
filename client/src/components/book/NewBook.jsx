
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./BookStyle.css"


function NewBook() {

    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');
    const [order, setOrder] = useState('');

    function handleTitle(){
      
    }

       
  return (
    <div>

    
    
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div class="card-body p-5 text-center">
    
                <div class="mb-md-5 mt-md-4 pb-5">
    
                  <h2 class="fw-bold mb-2 text-uppercase">Add a Book</h2>
                  <p class=" mb-5"></p>
    
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" value = {''} onChange = {''} className="form-control form-control-lg form-black text-black" />
                    <label class="form-label" for="typeEmailX">{''}</label>
                  </div>
    
                  <div class="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" value = {''} onChange = {''} class="form-control form-control-lg form-black" />
                    <label class="form-label" for="typePasswordX">{''}</label>
                  </div>
    
                  {/*<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>*/}
    
                  <button class="btn btn-outline-light btn-lg px-5" onClick = {''} type="submit">Login</button>
    
    {/*
                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                  </div>
      */}
                </div>
    
                <div>
                  <p class="mb-0">Don't have an account? <a href="#" onClick = {''} class="text-white-50 fw-bold">Sign Up</a>
                  </p>
                </div>
                <button class="btn btn-outline-light mt-4 col-3" onClick = {''} type="submit">Go Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  
    
    
    
        </div>
      )
    
    
  
  
}

export default NewBook
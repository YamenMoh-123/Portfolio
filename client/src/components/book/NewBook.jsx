
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./BookStyle.css"


function NewBook(props) {

  let navigate = useNavigate();


    function handleTitle(event){
      props.onTitle(event);
    }

    function handleScore(event){
      props.onScore(event);
    }

    function handleOrder(event){
      props.onOrder(event);
    }

    function handleSubmit(event){
      props.onSubmit(event);
      navigate("/books");
    }
    

       
  return (
    <div>
    
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-6">
            <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div class="card-body p-5 text-center">
    
                <div class="mb-md-5 mt-md-4 pb-5">
    
                  <h2 class="fw-bold mb-2 text-uppercase">Add a Book</h2>
                  <p class=" mb-5"></p>
    
                  <div className="form-outline form-white mb-4">
                    <input value = {props.title} onChange = {handleTitle} className="form-control form-control-lg form-black text-black" />
                    <label class="form-label" >Enter Book Title</label>
                  </div>
    
                  <div className = "d-flex justify-content-between">
                  <div class="form-outline form-white mb-4 col-lg-5">
                    <input value = {props.score} onChange = {handleScore} class="form-control form-control-lg form-black" />
                    <label class="form-label">Enter Score</label>

                  </div>

                  <div class="form-outline form-white mb-4 col-lg-5">
                    <input value = {props.order} onChange = {handleOrder} class="form-control form-control-lg form-black" />
                    <label class="form-label">Enter Order</label>

                  </div>
                  </div>
    
    
                  <button class="btn btn-outline-light btn-lg px-5" onClick = {handleSubmit} type="submit">Add</button>
    
  
                </div>
    
                <div>
                  
                </div>
                <button class="btn btn-outline-light mt-4 col-3" onClick = {()=>{navigate("/")}} type="submit">Go Home</button>
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
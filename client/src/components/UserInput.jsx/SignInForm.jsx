import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./InputStyle.css"

function SignIn(props) {

    let navigate = useNavigate();

    function handleUser(event){
        props.onUser(event);
    }

    function handlePassword(event){
        props.onPassword(event);
    }

    function handleSubmit(event){
        props.onSubmit(event);
    }

    function handleChange(event){
        props.handleC(event);
    }


  return (
    <div>

<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg form-black" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <div className = "container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value = {props.userName} onChange = {handleUser}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value = {props.password} onChange = {handlePassword}></textarea>
            </div>
            <button onClick = {handleSubmit}>click me</button>
            <button>sign in</button>
        </div>




    </div>
  )
}

export default SignIn
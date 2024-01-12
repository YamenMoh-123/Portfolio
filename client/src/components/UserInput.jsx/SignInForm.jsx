import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./InputStyle.css"

function SignIn(props) {

  const [emailTag, setEmailTag] = useState("Username");
    const [passwordTag, setPasswordTag] = useState("Password");

    let navigate = useNavigate();

    function handleUser(event){
        props.onUser(event);
        setEmailTag("Username");
    }

    function handlePassword(event){
        props.onPassword(event);
        setPasswordTag("Password");
    }

    function handleSubmit(event){
        props.onSubmit(event);

      if(props.userName ==""){
          setEmailTag("Please Enter a Username");
      }

      if(props.password == ""){
          setPasswordTag("Please Enter a Password");
      }
    }

    function handleNavigate(){
      navigate("/signUp");
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
              <p class="text-white-50 mb-5">Please enter your email and password</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" value = {props.userName} onChange = {handleUser} className="form-control form-control-lg form-black text-black" />
                <label class="form-label" for="typeEmailX">{emailTag}</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" value = {props.password} onChange = {handlePassword} class="form-control form-control-lg form-black" />
                <label class="form-label" for="typePasswordX">{passwordTag}</label>
              </div>

              {/*<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>*/}

              <button class="btn btn-outline-light btn-lg px-5" onClick = {handleSubmit} type="submit">Login</button>

{/*
              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>
  */}
            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#" onClick = {handleNavigate} class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
            <button class="btn btn-outline-light mt-4 col-3" onClick = {()=>{navigate("/")}} type="submit">Go Home</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*   // to delete
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
*/}



    </div>
  )
}

export default SignIn
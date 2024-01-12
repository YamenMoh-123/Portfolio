import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function SignIn(props) {

    const [emailTag, setEmailTag] = useState("Username");
    const [passwordTag, setPasswordTag] = useState("Password");

    let navigate = useNavigate();

    function handleUser(event){
        props.onUser(event);
        setEmailTag("Username");
    }

    function handleFirst(event){
        props.onFirst(event);
    }

    function handleLast(event){
        props.onLast(event);
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

        if(props.errorMessage !=''){
            setEmailTag(props.errorMessage);
        }

        if(props.password == ""){
            setPasswordTag("Please Enter a Password");
        }
        
       
    }

    

    function handleNavigate(){
        navigate("/Authenticate");
    }



  return (
    <div>

<section class="vh-100 gradient-customS">
  <div class="container-fluid py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
              <p class="text-white-50 mb-5">Please enter your information below</p>

              <div className="form-outlineF form-white mb-4 justify-content-between">
                <div className ="col-md-5">
                <input type="text" id="typeEmailX" value = {props.firstName} onChange = {handleFirst} className="form-control form-control-lg form-black text-black" />
                <label class="form-label"  for="typeEmailX">First Name</label>
                </div>
                <div className ="col-md-5">
                <input type="email" id="typeEmailX" value = {props.LastName} onChange = {handleLast} className="form-control form-control-lg form-black text-black" />
                <label class="form-label" for="typeEmailX">Last Name</label>
              </div>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="email"  value = {props.userName} onChange = {handleUser} class="form-control form-control-lg form-black" />
                <label class="form-label" for="typePasswordX">{emailTag}</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" value = {props.password} onChange = {handlePassword} class="form-control form-control-lg form-black" />
                <label class="form-label" for="typePasswordX">{passwordTag}</label>
              </div>

              {/*<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>*/}

              <button class="btn btn-outline-light btn-lg px-5" onClick = {handleSubmit} type="submit">Sign Up</button>
              </div>

<div>
  <p class="mb-0">Already have an account? <a href = "#" onClick = {handleNavigate}class="text-white-50 fw-bold">Sign In</a>
  </p>
</div>
<button class="btn btn-outline-light mt-4 col-2" onClick = {()=>{navigate("/")}} type="submit">Go Home</button>
</div>

</div>

</div>


</div>


</div>

</section>




{/*
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
            <button>sign up</button>
        </div>
*/}



    </div>
  )
}

export default SignIn
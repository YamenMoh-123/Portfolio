import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";





function Overview() {
  const [postCount, setPostCount] = useState(0);
  //const [bookCount, setBookCount] = useState(0); // to set after database creation

  async function countPosts(){
    const result = await axios.get("/blog/all");
    setPostCount(result.data.postCount);
    
   
  }
  countPosts();



  let navigate = useNavigate();



  return (
    <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Custom cards</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
      <div class="col" onClick = {()=>{navigate("/blog")}}  >
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold ">Visit My Blog</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>Posts:</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>{postCount}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col" onClick = {()=>{navigate("/books")}}>
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold">Check Out My Books</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>Books:</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>4</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col" >
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold">Sign Up For My Mailing List</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>Users:</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>5</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Overview
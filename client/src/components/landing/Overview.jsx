import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bookImage from "../../images/book.jpg"
import articleImage from "../../images/article.png"
import QA from "../../images/QA.png"





function Overview() {
  const [postCount, setPostCount] = useState(0);
  const [bookCount, setBookCount] = useState(0); // to set after database creation

  async function countPosts(){
    //const countBlog = await axios.get("/blog/all");
    //const bookCount = await axios.get("/book/all");
   // setPostCount(postCount.data.postCount);
    //setBookCount(bookCount.data.bookCount);
    
   
  }
  countPosts();



  let navigate = useNavigate();



  return (
    
      
    <div class="container px-4 pt-5 " id="custom-cards">
    <h2 class="pb-2 border-bottom"></h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
      <div class="col" onClick = {()=>{navigate("/blog")}}>
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${articleImage})`}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold ">Visit My Blog</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <i class="fa-regular fa-note-sticky" style = {{fontSize: "36px"}}></i>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <p>Posts:</p>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <p>{postCount}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col" onClick = {()=>{navigate("/books")}}>
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${bookImage})`}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold">Check Out My Books</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <i class="fa-solid fa-book" style = {{fontSize: "36px"}}></i>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <p>Books:</p>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <p>{bookCount}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col" onClick = {()=>{navigate("/question")}} >
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${QA})`}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-4 mb-5 display-6 lh-1 fw-bold">Ask a Question</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <i class="fa-solid fa-comments" style = {{fontSize: "36px"}}></i>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <p>Users:</p>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <p>5</p>
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
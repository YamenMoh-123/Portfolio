import React from "react";
import Landing from "./components/page/Landing.jsx";
import Blog from "./components/page/Blog.jsx";
import NewBlog from "./components/page/NewBlog.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogItem from "./components/page/BlogItem.jsx";
import Book from "./components/page/Book.jsx";
import Authenticate from "./components/page/Authenticate.jsx";
import SignUp from "./components/page/SignUp.jsx";




function App() {
  return (
    
    <div>

      <Router>
        <Routes>
          <Route index element = {<Landing />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/create" element={<NewBlog/>} />
          <Route path = "/blog/edit/:id" element = {<NewBlog/>} />
          <Route path = "/blog/:id" element= {<BlogItem/>}/>
          <Route path = "/books" element = {<Book/>}/>
          <Route path = "/authenticate" element = {<Authenticate/>} />
          <Route path = "/signUp" element = {<SignUp />} />
          {/*<Route path = "*" element = {noPage}/>*/}
          {/*<Route path = "/secret" element = {noPage}/>*/}
            
    </Routes>
    </Router> 
    </div>
    
  );
}

export default App;

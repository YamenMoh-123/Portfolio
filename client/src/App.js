import React from "react";
import Landing from "./components/page/Landing.jsx";
import Blog from "./components/page/Blog.jsx";
import NewBlog from "./components/page/NewBlog.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogItem from "./components/page/BlogItem.jsx";
import Book from "./components/page/Book.jsx";
import Authenticate from "./components/page/Authenticate.jsx";
import SignUp from "./components/page/SignUp.jsx";
import Temp1 from "./components/page/Temp1.jsx";
import Unauth from "./components/page/Unauth.jsx";
import AuthProvider, {AuthContext} from "./components/AuthProvider.js";
import AddBook from "./components/page/AddBook.jsx";
import NoPage from "./components/page/NoPage.jsx";




function App() {
  return (
    <AuthProvider>
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
          <Route path = "/addbook" element = {<AddBook/>}/>
          <Route path = "/question" element = {<Unauth />}  />
          <Route path = "*" element = {<NoPage/>}/>
            
    </Routes>
    </Router> 
    </div>
    </AuthProvider>
    
  );
}

export default App;

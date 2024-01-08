import React from "react";
import Landing from "./components/page/Landing.jsx";
import Blog from "./components/page/Blog.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";



function App() {
  return (
    
    <div>

      <Router>
        <Routes>
          <Route index element = {<Landing />} />
          <Route path="/blog" element={<Blog/>} />
          {/*<Route path = "*" element = {noPage}/>*/}
            
    </Routes>
    </Router> 
    </div>
    
  );
}

export default App;

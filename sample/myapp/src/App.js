import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import BlogList from "./Components/BlogList";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link> 
          </li>
          <li>
            <Link to ="/blogs">Blogs</Link> 
          </li>
          <li>
            <Link to ="/contact">Contact</Link> 
          </li>
        </ul>
      </nav>
         <Routes>
              <Route exact path="/" element={<Home />} />
              <Route  path="/blogs" element={<BlogList />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="*" element={<PageNotFound />} />
         </Routes>
    </Router>
  );
} ;

export default App;
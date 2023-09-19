import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/home";
import Product from "./Components/product";
import Contact from "./Components/contact";
import Login from "./Components/login";
import Signup from "./Components/signup";
import "./App.css";
// import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link> 
          </li>
          <li>
            <Link to ="/product">Product</Link> 
          </li>
          <li>
            <Link to ="/contact">Contact</Link> 
          </li>
          <li >
            <Link to="/login">LogIn</Link>
          </li>
          <li >
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
         <Routes>
              <Route exact path="/" element={<Home />} />
              <Route  path="/product" element={<Product />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="/login" element={<Login />} />
              <Route  path="/signup" element={<Signup />} />
              {/* <Route  path="*" element={<PageNotFound />} /> */}
         </Routes>
    </Router>
  );
} ;

export default App;

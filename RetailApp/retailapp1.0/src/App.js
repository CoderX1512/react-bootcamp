import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/home";
import ItemDisplay from  './Components/product';
import Contact from "./Components/contact";
import Login from "./Components/login";
// import Signup from "./Components/signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import SearchBarSection from './Components/searchBarSection';
import CartPage from './Components/cart';



class App extends React.Component {
  render () {
    return(
      <div>
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
          <li >
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        
      </nav>
      <div>
      <SearchBarSection />
    </div>
         <Routes>
              <Route exact path="/" element={<Home />} />
              <Route  path="/product" element={<ItemDisplay />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="/login" element={<Login />} />
              <Route  path="/searchBarSection" element={<SearchBarSection />} />
              <Route  path="/cart" element={<CartPage />} />
              {/* <Route  path="/signup" element={<Signup />} /> */}
              {/* <Route  path="*" element={<PageNotFound />} /> */}
         </Routes>
    </Router>
      {/* <div>
        <h3 className="p-3 text-center">React HTTP GET requests with Axios </h3>
        <ItemDisplay />
      </div> */}
      </div>
    );
  }
}

export default App ;

import React, { useState } from 'react';
import { CartProvider } from '../CartContext';
// import { CartContext } from '../context';
import ReactDOM from "react-dom/client";
import '../App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import ContemporaryCollection from "./ContemporaryCollection";
import HeritageCollection from "./HeritageCollection";
import ProductDetails from "./ProductDetails";
import Footer from './Footer';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes className="body">
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/contemporaryCollection" element={<ContemporaryCollection />} />
          <Route path="/heritagecollection" element={<HeritageCollection />} />
          <Route path="/productdetails/:productID" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>




  );
}

export default App;

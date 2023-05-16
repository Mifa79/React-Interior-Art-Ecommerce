import React, { useState } from 'react';
import { CartContext } from '../context';
import ReactDOM from "react-dom/client";
import '../App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import SignatureCollection from "./SignatureCollection";
import PosterCollection from "./PosterCollection";
import ProductDetails from "./ProductDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/signaturecollection" element={<SignatureCollection />} />
            <Route path="/postercollection" element={<PosterCollection />} />
            <Route path="/productdetails/:productID" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;

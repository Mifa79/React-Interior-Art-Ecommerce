import React from "react";
import ReactDOM from "react-dom/client";
import '../App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import AllProducts from "./AllProducts";
import SignatureCollection from "./SignatureCollection";
import PosterCollection from "./PosterCollection";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/signaturecollection" element={<SignatureCollection />} />
          <Route path="/postercollection" element={<PosterCollection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

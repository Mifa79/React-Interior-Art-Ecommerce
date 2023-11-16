import React from "react";
import NavbarCart from "./NavbarCart";
import products from "../products";

function Navbar() {
    // Extract unique collection names from the products array
    const uniqueCollections = Array.from(new Set(products.map(product => product.collection)));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <p className="logo">Budding Joy Studio</p>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/allproducts">ALL PRODUCTS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                COLLECTIONS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                {uniqueCollections.map(collection => (
                                    <li key={collection}>
                                        <a className="dropdown-item" href={`/${collection.toLowerCase().replace(/\s+/g, '')}`}>
                                            {collection}
                                        </a>
                                    </li>
                                ))}
                                
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>

                    <ul className="navbar-nav">
                        <NavbarCart></NavbarCart>
                    </ul>

                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
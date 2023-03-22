import React from "react";
import ProductImage from "../assets/images/product_1.webp";
import InRoomImage from "../assets/images/product_1_hover.webp";

function ProductDetails() {
    return (
        <div className="row product-details">
            <div id="carouselExampleControls" className="carousel-slide col-6" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ProductImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={InRoomImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={InRoomImage} className="d-block w-100" alt="..." />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className="col-6 product-description">
                <h3>Product Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>


    );
}

export default ProductDetails;

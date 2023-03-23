import React from "react";
import ImageSizeSelection from "./ImageSizeSelection";
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
            <div className="col-6 product-infos">
                <h3 className="product-name-artist">Cafe Terrace at Night - Vincent Van Gogh</h3>
                <h4 className="pricing-value">$25</h4>
                <h5 className="select-image-size-title">Select image size:</h5>
                <ImageSizeSelection></ImageSizeSelection>
                <button class="btn btn-primary add-to-cart-button" type="button">ADD TO CART</button>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aliquam tincidunt mauris eu risus.
                    Vestibulum auctor dapibus neque.
                    Nunc dignissim risus id metus.
                    Cras ornare tristique elit.
                    Vivamus vestibulum ntulla nec ante.
                    Praesent placerat risus quis eros.
                </p>
            </div>
        </div>


    );
}

export default ProductDetails;

import React from "react";
import ImageSizeSelection from "./ImageSizeSelection";
import ProductImage from "../assets/images/product_1.webp";
import InRoomImage from "../assets/images/product_1_hover.webp";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

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
            <div className="col-4 product-infos">
                <h3 className="product-name">Cafe Terrace at Night</h3>
                <p className="product-collection"><i class="fa-sharp fa-solid fa-barcode"></i>   Signature Collection</p>
                <p className="product-artist"><i class="fa-solid fa-palette"></i>   Vincent Van Gogh</p>
                
                <div class="border-product"></div>
                
                <h5 className="select-image-size-title">Select image size:</h5>
                <ImageSizeSelection></ImageSizeSelection>
                <h4 className="pricing-value">$25</h4>
                <h5 className="select-image-size-title">Select quantity:</h5>
                <IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>
                <div className="add-to-cart-with-quantity">
                    
                    <button class="btn btn-primary add-to-cart-button" type="button">ADD TO CART</button>
                </div>
                <div class="border-product"></div>
                <h5>Product Description</h5>
                <ul className="product-description">
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing.</li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                    <li>Vestibulum auctor dapibus neque.</li>
                    <li>Nunc dignissim risus id metus.</li>
                </ul>
                <h5>Features</h5>
                <ul>
                    <li>Cras ornare tristique elit.</li>
                    <li>Vivamus vestibulum ntulla nec ante.</li>
                    <li>Praesent placerat risus quis eros.</li>
                </ul>
            </div>
        </div>


    );
}

export default ProductDetails;

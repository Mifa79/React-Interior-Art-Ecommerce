import React from "react";
import ProductImage from "../assets/images/product_1.webp";
import InRoomImage from "../assets/images/product_1_hover.webp";

function ProductImageCarousel(props) {

    return (
        <div id="carouselExampleControls" className="carousel-slide col-6" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.imgURL} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.imgHoverURL} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.imgHoverURL} className="d-block w-100" alt="..." />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <div className="carousel-control-circle">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </div>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <div className="carousel-control-circle">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default ProductImageCarousel;
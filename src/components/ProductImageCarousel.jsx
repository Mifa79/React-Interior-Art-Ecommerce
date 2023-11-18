import React from "react";

function ProductImageCarousel(props) {
    return (
        <div id={`carousel-${props.id}`} className="product-carousel-slide carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.imgURL} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={props.imgHoverURL} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev carousel-control-circle" type="button" data-bs-target={`#carousel-${props.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-control-circle" type="button" data-bs-target={`#carousel-${props.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default ProductImageCarousel;

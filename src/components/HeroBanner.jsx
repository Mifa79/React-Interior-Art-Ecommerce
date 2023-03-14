import React from "react";
import HeroImage from "../assets/images/hero.webp";

function HeroBanner() {
    return (
        <div id="carouselExampleControls" classNameName="carousel-slide" data-bs-ride="carousel">
            <div classNameName="carousel-inner">
                <div className="carousel-item active">
                    <img src={HeroImage} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={HeroImage} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={HeroImage} className="d-block w-100" alt="..." />
                </div>
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

    );
}

export default HeroBanner;

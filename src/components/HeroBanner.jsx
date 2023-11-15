import React from "react";
import HeroImage from "../assets/images/hero.jpg";
import HeroImageFull from "../assets/images/hero_full.jpg";
import ThinHorizontalLine from "./ThinHorizontalLine";

function HeroBanner() {
    return (
        <div id="carouselExampleControls" className="carousel-slide" data-bs-ride="carousel">
            <div className="row">
                <div className="hero-text-banner">
                    <div className="hero-text-container">
                        <h1>Elevate Your Space with Stunning Wall Art</h1>
                        <ThinHorizontalLine></ThinHorizontalLine>
                        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</h5>
                    </div>
                    
                </div>
                <div className="hero-image-container">
                    <img className="hero-image" src={HeroImage} />
                </div>
            </div>
            
            {/* <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={HeroImageFull} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={HeroImageFull} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={HeroImageFull} className="d-block w-100" alt="..." />
                </div>
            </div> */}
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>

    );
}

export default HeroBanner;

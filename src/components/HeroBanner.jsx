import React from "react";
import HeroImage from "../assets/images/hero.jpg";
import HeroImageFull from "../assets/images/hero_full.jpg";
import ThinHorizontalLine from "./ThinHorizontalLine";

function HeroBanner() {
    return (
        <div>
            <div className="row hero-banner">
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
        </div>

    );
}

export default HeroBanner;

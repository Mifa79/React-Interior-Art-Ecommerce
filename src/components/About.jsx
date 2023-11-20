import React from "react";
import AboutUs1 from "../assets/images/about_us_1.jpg";
import AboutUs2 from "../assets/images/about_us_2.jpg";

function About() {
    return (
        <div className="about-us">
            <h2>About Us</h2>
            <div className="row about-us-content">
                <div className="about-image-container">
                    <img className="about-us-image" src={AboutUs1} />
                </div>
                <div className="about-text-container-1">
                    <h5 className="about-text-title">INTEGRATED DESIGN AND DEVELOPMENT EXPERTISE</h5>
                    <p className="about-text">As a versatile creative force at the intersection of design and technology, Budding Joy Studio brings a unique blend of graphic, UI/UX design expertise, and software/web development skills to transform ideas into immersive and seamless digital experiences.</p>
                </div>

                <div className="row about-us-content">
                    <div className="about-text-container-2">
                        <h5 className="about-text-title">CUSTOMER-CENTRIC EXCELLENCE</h5>
                        <p className="about-text">At Budding Joy Studio, we champion a 'Customer First' philosophy. Our focus is simple – to prioritize your needs in every aspect of our work. From innovative solutions to meticulous design, we're committed to not just meeting but exceeding your expectations. Step into a world where satisfaction isn't just a priority, but the essence of everything we do.</p>
                    </div>
                    <div className="about-image-container">
                        <img className="about-us-image" src={AboutUs2} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
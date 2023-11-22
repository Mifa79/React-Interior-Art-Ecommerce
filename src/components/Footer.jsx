import React from "react";

function Footer() {
    return (
        <div className="footer">

            <section className="row footer-info-container">
                    <div className="footer-nav">
                        <h5><a className="footer-nav-item" href="/">HOME</a></h5>
                        <h5><a className="footer-nav-item" href="/about">ABOUT US</a></h5>
                        <h5><a className="footer-nav-item" href="/allproducts">ALL PRODUCTS</a></h5>
                    </div>

                    <div className="company-info">
                        <p className="logo-footer">Budding Joy Studio</p>
                        <p className="company-brief">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
            </section>

            <section className="row copyright-social-media">
                <div className="copyright-container">
                    <p className="copyright">© 2023 Budding Joy Studio. All rights reserved.</p>
                </div>
                <div className="social-media-container">
                    {/* <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a> */}

                    {/* <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a> */}
                    <a href="https://www.linkedin.com/in/anhtonguyen/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Mifa79" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.behance.net/mifa79" className="me-4 text-reset">
                        <i className="fas fa-palette"></i>
                    </a>
                </div>
            </section>

        </div>

    );
}

export default Footer;
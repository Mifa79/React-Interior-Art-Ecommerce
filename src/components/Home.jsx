import React from "react";
import HeroBanner from './HeroBanner';
import PopularPicks from "./PopularPicks";
import ProductCategory from './ProductCategory';
import Footer from './Footer';


function Home() {
    return (
        <div className="homepage">
            <HeroBanner></HeroBanner>
            <PopularPicks></PopularPicks>
            <ProductCategory></ProductCategory>
            <ProductCategory></ProductCategory>
            <Footer></Footer>
        </div>
    );
}

export default Home;
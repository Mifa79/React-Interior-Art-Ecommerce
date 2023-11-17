import React from "react";
import HeroBanner from './HeroBanner';
import PopularPicks from "./PopularPicks";
import ProductCategory from './ProductCategory';
import Footer from './Footer';
import categories from "../categories";

function createProductCategory(category) {
    return (
        <ProductCategory
            name={category.name}
            image={category.image}
        />
    );
}

function Home() {
    return (
        <div className="homepage">
            <HeroBanner></HeroBanner>
            <PopularPicks></PopularPicks>
            {categories.map(createProductCategory)}
            <Footer></Footer>
        </div>
    );
}

export default Home;
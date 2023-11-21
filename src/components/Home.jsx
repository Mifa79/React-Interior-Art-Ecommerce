import React from "react";
import HeroBanner from './HeroBanner';
import PopularPicks from "./PopularPicks";
import ProductCategory from './ProductCategory';
import categories from "../categories";

function createProductCategory(category, index) {
    return (
        <ProductCategory
            name={category.name}
            image={category.image}
            urlValue={category.urlValue}
            reverseOrder={index % 2 !== 0}
        />
    );
}

function Home() {
    return (
        <div className="homepage">
            <HeroBanner></HeroBanner>
            <PopularPicks></PopularPicks>
            {categories.map(createProductCategory)}
        </div>
    );
}

export default Home;
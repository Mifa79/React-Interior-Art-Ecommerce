import React from "react";
import ProductCard from './ProductCard';

function PopularPicks() {
    return (
        <div className="popular-pick">
            <h2>Popular Picks</h2>
            <div className="row">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            <div className="row">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            <button class="btn btn-primary view-all-product-button" type="button">VIEW ALL PRODUCTS</button>
        </div>
    );
}

export default PopularPicks;
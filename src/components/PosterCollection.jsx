import React from "react";
import ProductCard from "./ProductCard";

function PosterCollection() {
    return (
        <div>
            <h2>Poster Collection</h2>
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
        </div>
    );
}

export default PosterCollection;
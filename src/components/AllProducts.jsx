import React from "react";
import ProductCard from './ProductCard';

function AllProducts() {
    return (
        <div>
            <h2>All Products</h2>
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

export default AllProducts;
import React from "react";
import ProductCard from './ProductCard';
import products from "../products";

function createProductCard(product) {
    return (
        <ProductCard
            id={product.id}
            name={product.name}
            artist={product.artist}
            imgURL={product.imgURL}
            imgHoverURL={product.imgHoverURL}
            pricing={product.pricing}
            collection={product.collection}
        />
    );
}

function AllProducts() {
    return (
        <div className="all-products">
            <h2>All Products</h2>
            <div className="row">
                {products.map(createProductCard)}
            </div>
        </div>
    );
}

export default AllProducts;
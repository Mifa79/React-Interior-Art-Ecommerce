import React from "react";
import ProductCard from './ProductCard';
import products from "../products";

function createProductCard(product) {
    return (
        <ProductCard
            key={product.id}
            name={product.name}
            artist={product.artist}
            img={product.imgURL}
            pricing={product.pricing}
            collection={product.collection}
        />
    );
}

function PopularPicks() {
    return (
        <div className="popular-pick">
            <h2>Popular Picks</h2>
            <div className="row">
                {products.map(createProductCard)}
            </div>
            <button class="btn btn-primary view-all-product-button" type="button">VIEW ALL PRODUCTS</button>
        </div>
    );
}

export default PopularPicks;
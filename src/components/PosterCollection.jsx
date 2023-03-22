import React from "react";
import ProductCard from './ProductCard';
import products from "../products";

function createProductCard(product) {
    return (
        <ProductCard
            key={product.id}
            name={product.name}
            artist={product.artist}
            imgURL={product.imgURL}
            imgHoverURL={product.imgHoverURL}
            pricing={product.pricing}
            collection={product.collection}
        />
    );
}

function PosterCollection() {
    const posterProducts = products.filter(product => product.collection === "Poster Collection");
    return (
        <div className="poster collection">
            <h2>Poster Collection</h2>
            <div className="row">
                {posterProducts.map(createProductCard)}
            </div>
            
        </div>
    );
}

export default PosterCollection;
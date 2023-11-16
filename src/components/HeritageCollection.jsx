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

function HeritageCollection() {
    const heritageProducts = products.filter(product => product.collection === "Heritage Collection");
    return (
        <div className="heritage-collection">
            <h2>Heritage Collection</h2>
            <div className="row">
                {heritageProducts.map(createProductCard)}
            </div>
            
        </div>
    );
}

export default HeritageCollection;
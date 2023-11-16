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

function ContemporaryCollection() {
    const contemporaryProducts = products.filter(product => product.collection === "Contemporary Collection");
    return (
        <div className="contemporary-collection">
            <h2>Contemporary Collection</h2>
            <div className="row">
                {contemporaryProducts.map(createProductCard)}
            </div>
            
        </div>
    );
}

export default ContemporaryCollection;
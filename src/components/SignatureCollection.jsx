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

function SignatureCollection() {
    const signatureProducts = products.filter(product => product.collection === "Signature Collection");
    return (
        <div className="signature-collection">
            <h2>Signature Collection</h2>
            <div className="row">
                {signatureProducts.map(createProductCard)}
            </div>
            
        </div>
    );
}

export default SignatureCollection;
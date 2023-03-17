import React from "react";
import ProductCard from "./ProductCard";

function SignatureCollection() {
    return (
        <div>
            <h2>Signature Collection</h2>
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

export default SignatureCollection;
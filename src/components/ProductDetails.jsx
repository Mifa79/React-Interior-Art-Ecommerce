import React from "react";
import ProductDetailsInfos from "./ProductDetailsInfos";
import ProductImageCarousel from "./ProductImageCarousel";

function ProductDetails() {
    return (
        <div className="row product-details">
            <ProductImageCarousel></ProductImageCarousel>
            <ProductDetailsInfos></ProductDetailsInfos>
        </div>


    );
}

export default ProductDetails;

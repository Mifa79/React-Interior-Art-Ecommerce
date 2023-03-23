import React from "react";
import ProductDescription from "./ProductDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductFeatures from "./ProductFeatures";
import ProductSelectionToCart from "./ProductSelectionToCart";

function ProductDetailsInfos() {
    return (
        <div className="col-4 product-infos">
            <ProductDetailsHeader></ProductDetailsHeader>
            <div class="border-product"></div>
            <ProductSelectionToCart></ProductSelectionToCart>
            <div class="border-product"></div>
            <ProductDescription></ProductDescription>
            <ProductFeatures></ProductFeatures>
        </div>
    );
}

export default ProductDetailsInfos;
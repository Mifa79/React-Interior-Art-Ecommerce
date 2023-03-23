import React from "react";
import ProductDescription from "./ProductDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductSelectionToCart from "./ProductSelectionToCart";

function ProductDetailsInfos() {
    return (
        <div className="col-4 product-infos">
            <ProductDetailsHeader></ProductDetailsHeader>
            <div class="border-product"></div>
            <ProductSelectionToCart></ProductSelectionToCart>
            <div class="border-product"></div>
            <ProductDescription></ProductDescription>
            <h5>Features</h5>
            <ul>
                <li>Cras ornare tristique elit.</li>
                <li>Vivamus vestibulum ntulla nec ante.</li>
                <li>Praesent placerat risus quis eros.</li>
            </ul>
        </div>
    );
}

export default ProductDetailsInfos;
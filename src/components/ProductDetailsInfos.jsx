import React from "react";
import ProductDescription from "./ProductDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductFeatures from "./ProductFeatures";
import ProductSelectionToCart from "./ProductSelectionToCart";
import ThinHorizontalLine from "./ThinHorizontalLine";

function ProductDetailsInfos() {
    return (
        <div className="col-4 product-infos">
            <ProductDetailsHeader></ProductDetailsHeader>
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductSelectionToCart></ProductSelectionToCart>
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductDescription></ProductDescription>
            <ProductFeatures></ProductFeatures>
        </div>
    );
}

export default ProductDetailsInfos;
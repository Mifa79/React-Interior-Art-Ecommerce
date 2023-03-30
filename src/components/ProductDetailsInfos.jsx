import React from "react";
import ProductDescription from "./ProductDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductFeatures from "./ProductFeatures";
import ProductSelectionToCart from "./ProductSelectionToCart";
import ThinHorizontalLine from "./ThinHorizontalLine";


function ProductDetailsInfos(props) {
    return (
        <div className="col-4 product-infos">
            <ProductDetailsHeader
                id={props.id}
                name={props.name}
                artist={props.artist}
                collection={props.collection}
            />
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductSelectionToCart></ProductSelectionToCart>
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductDescription></ProductDescription>
            <ProductFeatures></ProductFeatures>
        </div>
    );
}

export default ProductDetailsInfos;
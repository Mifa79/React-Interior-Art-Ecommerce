import React from "react";
import ProductDescription from "./ProductDescription";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductFeatures from "./ProductFeatures";
import ProductSelectionToCart from "./ProductSelectionToCart";
import ThinHorizontalLine from "./ThinHorizontalLine";


function ProductDetailsInfos(product) {
    return (
        <div className="product-infos">
            <ProductDetailsHeader
                id={product.id}
                name={product.name}
                artist={product.artist}
                collection={product.collection}
            />
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductSelectionToCart
                id={product.id}
                name={product.name}
                artist={product.artist}
                collection={product.collection}
                imgURL={product.imgURL}
                imgHoverURL={product.imgHoverURL}
                thumbnail={product.thumbnail}
                options={product.options}
            />
            <ThinHorizontalLine></ThinHorizontalLine>
            <ProductDescription></ProductDescription>
            <ProductFeatures></ProductFeatures>
        </div>
    );
}

export default ProductDetailsInfos;
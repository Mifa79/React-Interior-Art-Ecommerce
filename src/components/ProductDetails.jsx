import React, { useState} from "react";
import ProductDetailsInfos from "./ProductDetailsInfos";
import ProductImageCarousel from "./ProductImageCarousel";
import products from "../products";
import { useParams } from "react-router-dom";

function createProductImageCarousel(product) {
    return (
        <ProductImageCarousel
            id={product.id}
            name={product.name}
            artist={product.artist}
            imgURL={product.imgURL}
            imgHoverURL={product.imgHoverURL}
            collection={product.collection}
        />
    );
}

function createProductDetailsInfos(product) {
    return (
        <ProductDetailsInfos
            id={product.id}
            name={product.name}
            artist={product.artist}
            imgURL={product.imgURL}
            imgHoverURL={product.imgHoverURL}
            collection={product.collection}
            options={product.options}
            // selectedSize={selectedSize}
            // pricing={getPriceForSize(product, selectedSize)}
            // handleSizeChange={handleSizeChange}
        />
    );
}
  
function ProductDetails() {
    const { productID } = useParams();
    const product = products.find(product => product.id === productID);

    return (
        <div className="row product-details">
            <div className="carousel-container">
                {createProductImageCarousel(product)}  
            </div>
            <div className="product-details-infos-container">
                {createProductDetailsInfos(product)}
            </div>
        </div>
    );
}

export default ProductDetails;

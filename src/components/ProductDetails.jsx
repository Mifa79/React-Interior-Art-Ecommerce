import React from "react";
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
            pricing={product.pricing}
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
            pricing={product.pricing}
            collection={product.collection}
        />
    );
}

function ProductDetails() {
    const {productID} = useParams();
    const product = products.filter(product => product.id === productID);

    return (
        <div className="row product-details">
            {product.map(createProductImageCarousel)}
            {product.map(createProductDetailsInfos)}
        </div>


    );
}

export default ProductDetails;

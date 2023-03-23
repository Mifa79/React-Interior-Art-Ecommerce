import React from "react";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";
import ProductDetailsHeader from "./ProductDetailsHeader";

function ProductDetailsInfos() {
    return (
        <div className="col-4 product-infos">
            <ProductDetailsHeader></ProductDetailsHeader>
            <div class="border-product"></div>
            <h5 className="select-image-size-title">Select image size:</h5>
            <ImageSizeSelection></ImageSizeSelection>
            <h4 className="pricing-value">$25</h4>
            <h5 className="select-image-size-title">Select quantity:</h5>
            <IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>
            <div className="add-to-cart-with-quantity">
                <button class="btn btn-primary add-to-cart-button" type="button">ADD TO CART</button>
            </div>
            <div class="border-product"></div>
            <h5>Product Description</h5>
            <ul className="product-description">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
            </ul>
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
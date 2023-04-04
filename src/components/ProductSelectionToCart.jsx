import React from "react";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

function ProductSelectionToCart() {
    return (
        <div>
            <h5 className="select-image-size-title">Select image size:</h5>
            <ImageSizeSelection></ImageSizeSelection>
            <h4 className="pricing-value">$25</h4>
            <h5 className="select-image-size-title">Select quantity:</h5>
            <div className="product-detail-quantity-selection">
                <IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>
            </div>
            <div className="add-to-cart-with-quantity">
                <button class="btn btn-primary add-to-cart-button" type="button">ADD TO CART</button>
            </div>
        </div>
    );
}

export default ProductSelectionToCart;
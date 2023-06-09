import React from "react";
import product1HoverImage from '../assets/images/product_1_hover.webp';

function CartItemInfo() {
    return (
        <div className="cart-item-info-container">
            <div className="cart-table-product-image-container">
                <img src={product1HoverImage} className="cart-table-product-image"></img>
            </div>
            <div className="cart-table-product-info">
                <p className="cart-table-product-name">Cafe Terrace at Night</p>
                <p className="cart-table-product-size">Poster Size: 18" x 24"</p>
                <p className="cart-table-product-pricing">$25</p>
            </div>
        </div>
    );
}

export default CartItemInfo;
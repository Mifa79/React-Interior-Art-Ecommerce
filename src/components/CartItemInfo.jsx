import React from "react";
import product1HoverImage from '../assets/images/product_1_hover.webp';

function CartItemInfo({ item }) {
    const { name, size, pricing, image } = item;

    return (
        <div className="cart-item-info-container">
            <div className="cart-table-product-image-container">
                <img src={product1HoverImage} className="cart-table-product-image"></img>
            </div>
            <div className="cart-table-product-info">
                <p className="cart-table-product-name">{name}</p>
                <p className="cart-table-product-size">Poster Size: {size}</p>
                <p className="cart-table-product-pricing">${pricing}</p>
            </div>
        </div>
    );
}

export default CartItemInfo;
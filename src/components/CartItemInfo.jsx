import React from "react";

function CartItemInfo({ item }) {
    // const { name, size, pricing, imgHoverURL, imgURL } = item;
    console.log(item.imgHoverURL);

    return (
        <div className="cart-item-info-container">
            <div className="cart-table-product-image-container">
                <img src={item.imgURL} alt="product_image" className="cart-table-product-image"></img>
            </div>
            <div className="cart-table-product-info">
                <p className="cart-table-product-name">{item.name}</p>
                <p className="cart-table-product-size">Poster Size: {item.size}</p>
                <p className="cart-table-product-pricing">${item.pricing}</p>
            </div>
        </div>
    );
}

export default CartItemInfo;
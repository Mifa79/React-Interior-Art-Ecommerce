import React from "react";
import { Link } from "react-router-dom";

function CartItemInfo({ item }) {
    // const { name, size, pricing, imgHoverURL, imgURL } = item;
    console.log(item.imgHoverURL);

    return (
        <div className="row cart-item-info-container">

            <Link to={"/productdetails/" + item.id} className="cart-table-product-image-container">
                <img src={item.thumbnail} alt="product_image" className="cart-table-product-image"></img>
            </Link>

            <div className="cart-table-product-info">
                <p className="cart-table-product-name"><a className="item-name-link" href={"productdetails/" + item.id}>{item.name}</a></p>
                <p className="cart-table-product-size">Poster Size: {item.size}</p>
                <p className="cart-table-product-pricing">${item.pricing}</p>
            </div>
        </div>
    );
}

export default CartItemInfo;
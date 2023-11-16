import React from "react";
import { useCart, useDispatchCart } from '../CartContext';

function UpdateCartItemQuantity({ item }) {
    // const cartItems = useCart();

    // const calculateTotalQuantity = (cartItems) => {
    //     return cartItems.reduce((total, item) => {
    //         return total + item.quantity;
    //     }, 0);
    // };


    return (
        <div className="adjust-quantity-button input-group">
            <button className="quantity-minus-button button-minus border rounded-circle icon-shape icon-sm">-</button>
            <div className="quantity-field">
                <div className="quantity-number">{item.quantity}</div>
            </div>
            <button className="quantity-plus-button button-minus border rounded-circle icon-shape icon-sm">+</button>
        </div>
    );

}

export default UpdateCartItemQuantity;
import React from "react";
import { useCart, useDispatchCart } from '../CartContext';

function UpdateCartItemQuantity({ item }) {
    const cartItems = useCart();
    const cartDispatch = useDispatchCart();

    function increaseQuantity(item) {
        cartDispatch({
            type: 'INCREASE_ITEM_QUANTITY',
            item
        });
    }

    function decreaseQuantity(item) {
        cartDispatch({
            type: 'DECREASE_ITEM_QUANTITY',
            item
        });
    }

    return (
        <div className="adjust-quantity-button input-group">
            {item.quantity === 1 ? (
                <button className="quantity-trash-button button-minus border rounded-circle icon-shape icon-sm" onClick={() => decreaseQuantity(item)}>
                    <i  className="far fa-trash-alt quantity-trash-button-icon"></i>
                </button>
            ) : (
                <button className="quantity-minus-button button-minus border rounded-circle icon-shape icon-sm" onClick={() => decreaseQuantity(item)}>-</button>
            )}
            <div className="quantity-field">
                <div className="quantity-number">{item.quantity}</div>
            </div>
            <button className="quantity-plus-button button-minus border rounded-circle icon-shape icon-sm" onClick={() => increaseQuantity(item)}>+</button>
        </div>
    );

}

export default UpdateCartItemQuantity;
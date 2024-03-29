import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';

function AddToCartButton({ productToAdd }) {
    const cartItems = useCart();
    const cartDispatch = useDispatchCart();

    function addToCart(item) {
        cartDispatch({
            type: 'ADD_TO_CART',
            item
        });
    }
    // Log the cartItems whenever it changes
    useEffect(() => {
        console.log('cartItems:', cartItems);
    }, [cartItems]);

    return (
        <button class="btn btn-primary add-to-cart-button" type="button" onClick={() => addToCart(productToAdd)}>ADD TO CART</button>
    );
}

export default AddToCartButton;
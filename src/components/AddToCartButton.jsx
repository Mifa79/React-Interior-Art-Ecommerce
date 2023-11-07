import React, { useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';

function AddToCartButton({ productToAdd }) {
    const items = useCart();
    const dispatch = useDispatchCart();

    function addToCart(item) {
        console.log('testItem', item);
        dispatch({ 
            type: 'ADD_TO_CART', 
            item
        });
    }
    // Log the cartState whenever it changes
    useEffect(() => {
        console.log('cartState:', items);
    }, [items]);  


    return (
        <button class="btn btn-primary add-to-cart-button" type="button" onClick={() => addToCart(productToAdd)}>ADD TO CART</button>
    );
}

export default AddToCartButton;
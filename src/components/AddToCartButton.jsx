import React, { useEffect } from "react";
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

    // Load cartItems from local storage when the component mounts
    // useEffect(() => {
    //     const storedCartItems = localStorage.getItem('cartItems');
    //     if (storedCartItems) {
    //     cartDispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCartItems) });
    //     }

    //     console.log('load from local storage')
    //     console.log('storedCartItems:', storedCartItems);
    // }, [cartDispatch]);


    // Save cartItems to local storage whenever it changes
    useEffect(() => {
        console.log('save to local storage');
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <button class="btn btn-primary add-to-cart-button" type="button" onClick={() => addToCart(productToAdd)}>ADD TO CART</button>
    );
}

export default AddToCartButton;
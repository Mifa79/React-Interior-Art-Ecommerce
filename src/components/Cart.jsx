import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";
import CartTableFooter from "./CartTableFooter";

function Cart() {
    const cartItems = useCart();
    const cartDispatch = useDispatchCart();

    useEffect(() => {
        console.log('cartItems:', cartItems);
    }, [cartItems]);   


    // Load cartItems from local storage when the component mounts
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
        cartDispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCartItems) });
        }

        console.log('load from local storage')
        console.log('storedCartItems:', storedCartItems);
    }, [cartDispatch]);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <CartTableHeader></CartTableHeader>
                {/* <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul> */}
                
                
                {cartItems.map((item) => (
                    <CartTableRow item={item} />
                ))}
                <CartTableFooter></CartTableFooter>
            </div>
        </div>
    );
}

export default Cart;
import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";
import CartTableFooter from "./CartTableFooter";

function Cart() {
    const cartItems = useCart();
    const cartDispatch = useDispatchCart();

    const calculateTotalPrice = (cartItems) => {
        return cartItems.reduce((total, item) => {
            return total + item.quantity * item.pricing;
        }, 0);
    };

    useEffect(() => {
        console.log('cartItems:', cartItems);
    }, [cartItems]);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <CartTableHeader></CartTableHeader>

                {cartItems.map((item) => (
                    <CartTableRow item={item} />
                ))}

                <CartTableFooter totalPrice={calculateTotalPrice(cartItems)}></CartTableFooter>
            </div>
        </div>
    );
}

export default Cart;
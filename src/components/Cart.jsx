import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";
import CartTableFooter from "./CartTableFooter";
import EmptyCart from '../assets/images/empty_cart.jpg';

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
            {cartItems.length === 0 ? (
                <div>
                    <h2>Cart is empty.</h2>
                    <div className="row empty-cart-image-container" >
                        <img src={EmptyCart}></img>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Shopping Cart</h2>
                    <div className="cart-table">
                        <CartTableHeader></CartTableHeader>

                        {cartItems.map((item) => (
                            <CartTableRow item={item} />
                        ))}

                        <CartTableFooter totalPrice={calculateTotalPrice(cartItems)}></CartTableFooter>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Cart;
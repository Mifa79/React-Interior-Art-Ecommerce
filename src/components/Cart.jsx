import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from '../CartContext';
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";
import CartTableFooter from "./CartTableFooter";

function Cart() {
    const items = useCart();

    useEffect(() => {
        console.log('cartState:', items);
    }, [items]);   

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
                
                
                {items.map((item) => (
                    <CartTableRow item={item} />
                ))}
                <CartTableFooter></CartTableFooter>
            </div>
        </div>
    );
}

export default Cart;
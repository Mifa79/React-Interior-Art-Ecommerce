import React from "react";
import { useCart } from '../CartContext';

function NavbarCart() {
    const cartItems = useCart();

    const calculateTotalQuantity = (cartItems) => {
        return cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    };

    return (
        <li className="nav-item">
            <a className="nav-link" href="/cart">CART({calculateTotalQuantity(cartItems)})</a>
        </li>
    );
}

export default NavbarCart;
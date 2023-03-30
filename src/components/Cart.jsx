import React from "react";
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";

function Cart() {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <CartTableHeader></CartTableHeader>
                <CartTableRow></CartTableRow>
                <CartTableRow></CartTableRow>
            </div>
        </div>
    );
}

export default Cart;
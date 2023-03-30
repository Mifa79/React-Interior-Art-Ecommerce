import React from "react";
import CartTableHeader from "./CartTableHeader";
import CartTableRow from "./CartTableRow";
import CartTableFooter from "./CartTableFooter";

function Cart() {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <CartTableHeader></CartTableHeader>
                <CartTableRow></CartTableRow>
                <CartTableRow></CartTableRow>
                <CartTableFooter></CartTableFooter>
            </div>
        </div>
    );
}

export default Cart;
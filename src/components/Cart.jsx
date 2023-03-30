import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import CartTableRow from "./CartTableRow";

function Cart() {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <div className="row cart-table-heading">
                    <div className="col-8 cart-table-heading-product">Product</div>
                    <div className="col-2 cart-table-heading-quantity">Quantity</div>
                    <div className="col-2 cart-table-heading-total">Total</div>
                </div>
                <ThinHorizontalLine></ThinHorizontalLine>
                <CartTableRow></CartTableRow>
                <CartTableRow></CartTableRow>
            </div>
        </div>
    );
}

export default Cart;
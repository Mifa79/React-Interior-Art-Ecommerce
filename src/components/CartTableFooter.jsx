import React from "react";

function CartTableFooter({ totalPrice }) {
    return (
        <div className="row cart-table-footer">
            <p className="cart-subtotal">Subtotal: ${totalPrice}</p>
            <p className="cart-taxes-shipping-reminder">Taxes and shipping calculated at checkout</p>
            <div className="check-out-button-container">
                <button className="btn btn-primary check-out-button" type="button">CHECK OUT</button>
            </div>
        </div>
    );
}

export default CartTableFooter;
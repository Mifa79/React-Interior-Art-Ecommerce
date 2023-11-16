import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";
import CartItemInfo from "./CartItemInfo";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";

function CartTableRow({ item }) {
    return (
        <div>
            <div className="row cart-table-row">
                <div className="col-6 cart-item-info">
                    <CartItemInfo item={item}></CartItemInfo>
                </div>
                <div className="col-4 cart-adjust-quantity-button">
                    <UpdateCartItemQuantity item={item}></UpdateCartItemQuantity>
                </div>
                <p className="col-2 cart-item-total-pricing">${item.pricing * item.quantity}</p>
            </div>
            <ThinHorizontalLine></ThinHorizontalLine>
        </div>
    );
}

export default CartTableRow;
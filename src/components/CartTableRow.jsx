import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";
import CartItemInfo from "./CartItemInfo";

function CartTableRow() {
    return (
        <div>
            <div className="row cart-table-row">
                <div className="col-8">
                    <CartItemInfo></CartItemInfo>
                </div>
                <div className="col-2 cart-adjust-quantity-button">
                    <IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>
                </div>
                <p className="col-2 cart-item-total-pricing">$25</p>
            </div>
            <ThinHorizontalLine></ThinHorizontalLine>
        </div>
    );
}

export default CartTableRow;
import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";
import CartItemInfo from "./CartItemInfo";

function CartTableRow({ item }) {
    item.pricing = parseFloat(item.pricing);
    item.quantity = parseInt(item.quantity);

    return (
        <div>
            <div className="row cart-table-row">
                <div className="col-6 cart-item-info">
                    <CartItemInfo item={item}></CartItemInfo>
                </div>
                <div className="col-4 cart-adjust-quantity-button">
                    {item.quantity}
                    {/* {<IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>} */}
                </div>
                <p className="col-2 cart-item-total-pricing">${item.pricing * item.quantity}</p>
            </div>
            <ThinHorizontalLine></ThinHorizontalLine>
        </div>
    );
}

export default CartTableRow;
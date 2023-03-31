import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";

function CartTableHeader() {
    return (
        <div>
            <div className="row cart-table-heading">
                <div className="col-6 cart-table-heading-product">Product</div>
                <div className="col-4 cart-table-heading-quantity">Quantity</div>
                <div className="col-2 cart-table-heading-total">Total</div>
            </div>
            <ThinHorizontalLine></ThinHorizontalLine>
        </div>
    );
}

export default CartTableHeader;
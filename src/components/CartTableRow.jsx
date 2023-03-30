import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";
import product1HoverImage from '../assets/images/product_1_hover.webp';

function CartTableRow() {
    return (
        <div>
            <div className="row cart-table-row">
                <div className="col-8">
                    <div className="row cart-table-product-info-container">
                        <img src={product1HoverImage} className="cart-table-product-image"></img>
                        <div className="cart-table-product-info">
                            <p className="cart-table-product-name">Cafe Terrace at Night</p>
                            <p className="cart-table-product-size">Poster Size: 18" x 24"</p>
                            <p className="cart-table-product-pricing">$25</p>
                        </div>
                    </div>
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
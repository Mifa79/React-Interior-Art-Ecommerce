import React from "react";
import ThinHorizontalLine from "./ThinHorizontalLine";
import product1Image from '../assets/images/product_1.webp';
import product1HoverImage from '../assets/images/product_1_hover.webp';

function Cart() {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-table">
                <div className="row cart-table-heading">
                    <div className="col-6 cart-table-heading-product">Product</div>
                    <div className="col-3 cart-table-heading-quantity">Quantity</div>
                    <div className="col-3 cart-table-heading-total">Total</div>
                </div>
                <ThinHorizontalLine></ThinHorizontalLine>
                <div className="row cart-table-content">
                    <div className="col-6">
                        <div className="row cart-table-product-info-container">
                            <img src={product1HoverImage} className="cart-table-product-image"></img>
                            <div className="cart-table-product-info">
                                <p className="cart-table-product-name">Cafe Terrace at Night</p>
                                <p className="cart-table-product-size">Poster Size: 18" x 24"</p>
                                <p className="cart-table-product-pricing">$25</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 cart-adjust-quantity-button">

                    </div>
                    <div className="col-3 cart-pricing">

                    </div>

                </div>
            </div>


            
        </div>
    );
}

export default Cart;
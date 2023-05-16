import React, { useContext } from 'react';
import { CartContext } from '../context';
import AddToCartButton from "./AddToCartButton";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

function ProductSelectionToCart(props) {
    const { cart, setCart } = useContext(CartContext);

    setCart((prevCart) => [
        ...prevCart,
        { productID: props.id },
    ]);

    return (
        <div>
            <h5 className="select-image-size-title">Select image size:</h5>
            <ImageSizeSelection></ImageSizeSelection>
            <h4 className="pricing-value">$25</h4>
            <h5 className="select-image-size-title">Select quantity:</h5>
            <div className="product-detail-quantity-selection">
                <IncreaseDecreaseQuantityButton></IncreaseDecreaseQuantityButton>
            </div>
            <div className="add-to-cart-with-quantity">
                <AddToCartButton></AddToCartButton>
            </div>
        </div>
    );
}

export default ProductSelectionToCart;
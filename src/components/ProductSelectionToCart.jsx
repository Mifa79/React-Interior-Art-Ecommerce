import React, { useContext, useState } from 'react';
import { CartContext } from '../context';
import AddToCartButton from "./AddToCartButton";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

function ProductSelectionToCart(props) {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");

    const addToCart = () => {
        const newItem = {
          id: props.id,
          name: props.name,
          pricing: props.pricing,
          size: selectedSize,
          quantity: quantity
        };
    
        setCart(prevCart => [...prevCart, newItem]);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    return (
        <div>
            <h5 className="select-image-size-title">Select image size:</h5>
            <ImageSizeSelection onSizeChange={handleSizeChange}></ImageSizeSelection>
            <h4 className="pricing-value">{props.pricing}</h4>
            <h5 className="select-image-size-title">Select quantity:</h5>
            <div className="product-detail-quantity-selection">
                <IncreaseDecreaseQuantityButton onQuantityChange={handleQuantityChange}></IncreaseDecreaseQuantityButton>
            </div>
            <div className="add-to-cart-with-quantity">
                <AddToCartButton onClick={addToCart}></AddToCartButton>
            </div>
        </div>
    );
}

export default ProductSelectionToCart;
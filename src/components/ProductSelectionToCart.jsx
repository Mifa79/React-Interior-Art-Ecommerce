import React, { useContext, useState, useEffect } from 'react';
import { useCart, useDispatchCart } from '../CartContext';
import AddToCartButton from "./AddToCartButton";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

function ProductSelectionToCart(props) {
    const dispatch = useDispatchCart();
    const [productToAdd, setProductToAdd] = useState({
        id: props.id,
        name: props.name,
        pricing: props.pricing,
        quantity: 1,
    });

    const handleQuantityChange = (newQuantity) => {
        setProductToAdd({
            id: props.id,
            name: props.name,
            pricing: props.pricing,
            quantity: newQuantity,
        })
    };

    useEffect(() => {
        console.log('productToAdd:', productToAdd);
    }, [productToAdd]);

    // const handleSizeChange = (size) => {
    //     setSelectedSize(size);
    // };


    return (
        <div>
            <h5 className="select-image-size-title">Select image size:</h5>
            <ImageSizeSelection></ImageSizeSelection>
            <h4 className="pricing-value">${props.pricing}</h4>
            <h5 className="select-image-size-title">Select quantity:</h5>
            <div className="product-detail-quantity-selection">
                <IncreaseDecreaseQuantityButton onQuantityChange={handleQuantityChange}></IncreaseDecreaseQuantityButton>
            </div>
            <div className="add-to-cart-with-quantity">
                <AddToCartButton productToAdd={productToAdd}></AddToCartButton>
            </div>
        </div>
    );
}

export default ProductSelectionToCart;
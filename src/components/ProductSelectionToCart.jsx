import React, { useContext, useState, useEffect } from 'react';
import { useCart, useDispatchCart } from '../CartContext';
import AddToCartButton from "./AddToCartButton";
import ImageSizeSelection from "./ImageSizeSelection";
import IncreaseDecreaseQuantityButton from "./IncreaseDecreaseQuantityButton";

function getPriceForSize(product, selectedSize) {
    console.log("test test", product, selectedSize);
    console.log("true or false", product.options.find(option => option.size === selectedSize))
    const selectedOption = product.options.find(option => option.size === selectedSize);
    return selectedOption ? selectedOption.pricing : "";
}

function ProductSelectionToCart(props) {
    const dispatch = useDispatchCart();
    console.log("if availabe", props.options[0]);
    const [selectedSize, setSelectedSize] = useState(props.options[0]);
    const [productToAdd, setProductToAdd] = useState({
        id: props.id,
        name: props.name,
        imgURL: props.imgURL,
        imgHoverURL: props.imgHoverURL,
        quantity: 1,
        size: "16x20",
        pricing: getPriceForSize(props, "16x20"),
    });

    const handleQuantityChange = (newQuantity) => {
        setProductToAdd({
            id: props.id,
            name: props.name,
            pricing: productToAdd.pricing,
            imgURL: props.imgURL,   
            imgHoverURL: props.imgHoverURL,
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
            <h4 className="select-image-size-title">Select image size:</h4>
            <ImageSizeSelection></ImageSizeSelection>
            <h4 className="pricing-value">${productToAdd.pricing}</h4>
            <h4 className="select-image-size-title">Select quantity:</h4>
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
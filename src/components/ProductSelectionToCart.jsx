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
    const [selectedSize, setSelectedSize] = useState(props.options[0].size);
    const [productToAdd, setProductToAdd] = useState({
        id: props.id,
        name: props.name,
        imgURL: props.imgURL,
        imgHoverURL: props.imgHoverURL,
        thumbnail: props.thumbnail,
        size: "16x20",
        pricing: getPriceForSize(props, "16x20"),
        quantity: 1,
    });

    const handleQuantityChange = (newQuantity) => {
        setProductToAdd({
            id: props.id,
            name: props.name,
            imgURL: props.imgURL,   
            imgHoverURL: props.imgHoverURL,
            thumbnail: props.thumbnail,
            size: productToAdd.size,
            pricing: productToAdd.pricing,
            quantity: newQuantity,
        })
    };

    useEffect(() => {
        console.log('productToAdd:', productToAdd);
    }, [productToAdd]);

    const handleSizeChange = (newSize) => {
        setProductToAdd({
            id: props.id,
            name: props.name,
            imgURL: props.imgURL,   
            imgHoverURL: props.imgHoverURL,
            thumbnail: props.thumbnail,
            size: newSize,
            pricing: getPriceForSize(props, newSize),
            quantity: productToAdd.quantity,
        })
    };


    return (
        <div>
            <h4 className="select-image-size-title">Select image size:</h4>
            <ImageSizeSelection onSizeChange={handleSizeChange}></ImageSizeSelection>
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
import React, { useRef } from "react";
import ProductImage from "../assets/images/product_card.jpeg";
import ProductImageHover from "../assets/images/product_card_hover.jpg";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            className="product-image"
            onMouseOver={() => { imageRef.current.src = secondaryImg; }}
            onMouseOut={() => { imageRef.current.src = primaryImg; }}
            src={ProductImage}
            alt="product"
            ref={imageRef}
        />
    )
}

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg={ProductImage}
                secondaryImg={ProductImageHover}
                alt="" />
        </div>
    )
}

function ProductCard(props) {
    return (
        <div className="product-item col-lg-3 col-md-4 col-sm-6">
            <ImageChangeOnMouseOver />
            <p className="item-name">{props.name} - {props.artist}</p>
            <p className="item-category">{props.collection}</p>
        </div>
    );
}

export default ProductCard;
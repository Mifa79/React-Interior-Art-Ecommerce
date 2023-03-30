import React, { useRef } from "react";
import products from "../products";
import ImageHover from "./ImageHover";

function ProductCard(props) {
    return (
        <div className="product-item col-lg-3 col-md-4 col-sm-6">
            <ImageHover
                imgURL={props.imgURL}
                imgHoverURL={props.imgHoverURL}
            />
            <p className="item-name"><a className="item-name-link" href={"productdetails/" + props.id}>{props.name} - {props.artist}</a></p>
            <p className="item-category">{props.collection}</p>
        </div>
    );
}

export default ProductCard;







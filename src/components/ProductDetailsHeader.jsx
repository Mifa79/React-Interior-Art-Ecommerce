import React from "react";

function ProductDetailsHeader(props) {
    return (
        <div>
            <h3 className="product-name">{props.name}</h3>
            <p className="product-collection"><i class="fa-sharp fa-solid fa-barcode"></i>&nbsp;&nbsp;&nbsp;{props.collection}</p>
            <p className="product-artist"><i class="fa-solid fa-palette"></i>&nbsp;&nbsp;&nbsp;{props.artist}</p>
        </div>
    );
}

export default ProductDetailsHeader;
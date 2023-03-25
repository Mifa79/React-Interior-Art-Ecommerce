import React from "react";

function ProductDetailsHeader() {
    return (
        <div>
            <h3 className="product-name">Cafe Terrace at Night</h3>
            <p className="product-collection"><i class="fa-sharp fa-solid fa-barcode"></i>&nbsp;&nbsp;&nbsp;Signature Collection</p>
            <p className="product-artist"><i class="fa-solid fa-palette"></i>&nbsp;&nbsp;&nbsp;Vincent Van Gogh</p>
        </div>
    );
}

export default ProductDetailsHeader;
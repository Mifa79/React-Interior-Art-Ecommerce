import React from "react";
import CategoryImage from "../assets/images/category_1.jpeg";

function ProductCategory() {
    return (
        <div className="product-category row">
            <div className="category-image-container col-6">
                <img className="category-image" src={CategoryImage} />
            </div>
            <div className="category-info col-6">
                <h2>Signature Collection</h2>
                <p>Discover the Signature Collection, featuring a curated selection of high-quality prints from top artists around the world. These iconic pieces are sure to make a statement in any room and are perfect for those seeking unique, one-of-a-kind artwork.</p>
                <button class="btn btn-primary shop-by-categories-button" type="button">SHOP NOW</button>
            </div>

        </div>
        
    );
}

export default ProductCategory;
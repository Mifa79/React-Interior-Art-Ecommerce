import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from "../products";

function createProductCard(product) {
    return (
        <ProductCard
            id={product.id}
            name={product.name}
            artist={product.artist}
            imgURL={product.imgURL}
            imgHoverURL={product.imgHoverURL}
            pricing={product.pricing}
            collection={product.collection}
        />
    );
}

function PopularPicks() {
    const navigate = useNavigate();
    return (
        <div className="popular-pick">
            <h2>Popular Picks</h2>
            <div className="row">
                {products.map(createProductCard)}
            </div>
            {/* <Link to="allproducts" class="btn btn-primary view-all-product-button" type="button">VIEW ALL PRODUCTS</Link> */}
            <button
                className="btn btn-primary view-all-product-button"
                type="button"
                onClick={() => navigate('/allproducts')}
            >
                VIEW ALL PRODUCTS
            </button>
        </div>
    );
}

export default PopularPicks;
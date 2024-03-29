import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ProductCategory(props) {
    const navigate = useNavigate();
    return (
        <div>
            {props.reverseOrder ? (
                <div className="product-category">
                    <div className="category-image-container-even">
                        <img className="category-image" src={props.image} />
                    </div>
                    <div className="category-info-container-even">
                        <div className="category-info">
                            <div className="category-info-inner">
                                <h2>{props.name}</h2>
                                <p className="category-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                {/* <Link to={"/" + props.urlValue} class="btn btn-primary shop-by-categories-button" type="button">SHOP NOW</Link> */}
                                <button
                                    className="btn btn-primary shop-by-categories-button"
                                    type="button"
                                    onClick={() => navigate(`/${props.urlValue}`)}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="product-category">
                    <div className="category-info-container-odd">
                        <div className="category-info">
                            <div className="category-info-inner">
                                <h2>{props.name}</h2>
                                <p className="category-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                {/* <Link to={"/" + props.urlValue} class="btn btn-primary shop-by-categories-button" type="button">SHOP NOW</Link> */}
                                <button
                                    className="btn btn-primary shop-by-categories-button"
                                    type="button"
                                    onClick={() => navigate(`/${props.urlValue}`)}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="category-image-container-odd">
                        <img className="category-image" src={props.image} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductCategory;
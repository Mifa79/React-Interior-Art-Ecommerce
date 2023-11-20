import React, { useState } from "react";
import { Link } from "react-router-dom";

function ImageHover(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Link  to={"/productdetails/" + props.id}>
            {isHovering ? (
                <img
                    className="product-image"
                    src={props.imgHoverURL}
                    alt="Product displayed in room"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            ) : (
                <img
                    className="product-image"
                    src={props.imgURL}
                    alt="Product Image"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            )}
        </Link>
    );
}

export default ImageHover;

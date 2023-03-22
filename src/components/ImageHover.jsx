import React, { useState } from "react";

function ImageHover(props) {
    console.log(props);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            {isHovering ? (
                <img
                    className="product-image"
                    src={props.imgHoverURL}
                    alt="Hover Image"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            ) : (
                <img
                    className="product-image"
                    src={props.imgURL}
                    alt="Original Image"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            )}
        </div>
    );
}

export default ImageHover;

import React, { useState } from "react";

function ImageSizeSelection({ onSizeChange }) {
    const [selectedSize, setSelectedSize] = useState("16x20");

    const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
      onSizeChange(event.target.value);
    };

    return (
        <div className="btn-group select-image-size-button" role="group" aria-label="Basic radio toggle button group">
            <div className="size-1">
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="btnradio" 
                    id="btnradio1" 
                    value="16x20"
                    autocomplete="off" 
                    checked={selectedSize === "16x20"}
                    onChange={handleSizeChange} 
                />
                <label className="btn size-selection-button" for="btnradio1">16" x 20"</label>
            </div>
            <div className="size-2">
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="btnradio" 
                    id="btnradio2" 
                    value="18x24"
                    autocomplete="off" 
                    checked={selectedSize === "18x24"}
                    onChange={handleSizeChange} 
                />
                <label className="btn size-selection-button" for="btnradio2">18" x 24"</label>
            </div>
            <div className="size-3">
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="btnradio" 
                    id="btnradio3" 
                    value="24x32"
                    autocomplete="off" 
                    checked={selectedSize === "24x32"}
                    onChange={handleSizeChange} 
                />
                <label className="btn size-selection-button" for="btnradio3">24" x 32"</label>
            </div>

        </div>
    );
}

export default ImageSizeSelection;
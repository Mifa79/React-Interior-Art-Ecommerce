import React from "react";

function ImageSizeSelection() {
    return (
        <div class="btn-group select-image-size-button" role="group" aria-label="Basic radio toggle button group">
            <div className="size-1">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label class="btn btn-outline-primary size-selection-button" for="btnradio1">18" x 24"</label>

            </div>
            <div className="size-2">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary size-selection-button" for="btnradio2">16" x 20"</label>
            </div>
            <div className="size-3">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-outline-primary size-selection-button" for="btnradio3">24" x 32"</label>
            </div>

        </div>
    );
}

export default ImageSizeSelection;
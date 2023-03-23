import React from "react";

function IncreaseDecreaseQuantityButton() {
    return (
        <div class="d-flex">
            <div class="input-group">
                <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm" data-field="quantity" />
                <p className="quantity-field"><span className="quantity-number">1</span></p>
                {/* <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field" /> */}
                <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />
            </div>
        </div>
    );
}

export default IncreaseDecreaseQuantityButton;
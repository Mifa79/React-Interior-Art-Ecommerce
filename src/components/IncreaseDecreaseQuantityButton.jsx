import React, { useState } from "react";

function IncreaseDecreaseQuantityButton() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount (count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount (count - 1);
        } else {
            setCount(0);
        }
    }

    return (
        <div class="d-flex">
            <div class="input-group">
                <button class="button-minus border rounded-circle  icon-shape icon-sm" onClick={decrease}>-</button>
                <p className="quantity-field"><span className="quantity-number">{count}</span></p>
                <button class="button-minus border rounded-circle  icon-shape icon-sm" onClick={increase}>+</button>
            </div>
        </div>
    );
}

export default IncreaseDecreaseQuantityButton;
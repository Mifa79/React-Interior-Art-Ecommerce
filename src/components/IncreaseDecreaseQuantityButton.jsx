import React, { useState } from "react";

function IncreaseDecreaseQuantityButton() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }

    return (
        <div class="adjust-quantity-button input-group">
            <button class="quantity-minus-button button-minus border rounded-circle icon-shape icon-sm" onClick={decrease}>-</button>
            <div className="quantity-field"><div className="quantity-number">{count}</div></div>
            <button class="quantity-plus-button button-minus border rounded-circle icon-shape icon-sm" onClick={increase}>+</button>
        </div>
    );
}

export default IncreaseDecreaseQuantityButton;
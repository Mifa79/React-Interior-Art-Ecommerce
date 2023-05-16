import React, { useState } from 'react';

function IncreaseDecreaseQuantityButton() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(prevCount => prevCount + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        } else {
            setCount(0);
        }
    }

    return (
        <div className="adjust-quantity-button input-group">
            <button className="quantity-minus-button button-minus border rounded-circle icon-shape icon-sm" onClick={decrease}>-</button>
            <div className="quantity-field"><div className="quantity-number">{count}</div></div>
            <button className="quantity-plus-button button-minus border rounded-circle icon-shape icon-sm" onClick={increase}>+</button>
        </div>
    );
}

export default IncreaseDecreaseQuantityButton;

import React, { useState } from 'react';

function IncreaseDecreaseQuantityButton({ onQuantityChange }) {
    const [count, setCount] = useState(1);

    function increase() {
        const newCount = count + 1;
        setCount(newCount);
        onQuantityChange(newCount); // Invoke the onQuantityChange prop with the updated count
    }

    function decrease() {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onQuantityChange(newCount); // Invoke the onQuantityChange prop with the updated count
        }
    }

    return (
        <div className="adjust-quantity-button input-group">
            <button className="quantity-minus-button button-minus border rounded-circle icon-shape icon-sm" onClick={decrease}>-</button>
            <div className="quantity-field">
                <div className="quantity-number">{count}</div>
            </div>
            <button className="quantity-plus-button button-minus border rounded-circle icon-shape icon-sm" onClick={increase}>+</button>
        </div>
    );
}

export default IncreaseDecreaseQuantityButton;

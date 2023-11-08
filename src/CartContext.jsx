import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the product is already in the cart
            const existingProduct = state.find(item => item.id === action.item.id);
            console.log('existingProduct', existingProduct);

            if (existingProduct) {
                // If it's already in the cart, update the quantity
                return state.map(item =>
                    item.id === action.item.id
                        ? { ...item, quantity: item.quantity + action.item.quantity }
                        : item
                );

            } else {
                // If it's not in the cart, add it
                return [...state, action.item];
            }

        case 'LOAD_CART':
            // Handle loading the cart state from local storage
            return action.payload; // Set the cart state to the payload loaded from local storage

        default:
            throw new Error(`unknown action ${action.type}`);
    }
};

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, [], (initialState) => {
        // Load cartItems from local storage when the component mounts
        const storedCartItems = localStorage.getItem('cartState');
        if (storedCartItems) {
            return JSON.parse(storedCartItems);
        }
        return initialState; // If there's no data in local storage, use the provided initial state
    });

    // Save cartItems to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(cartState));
    }, [cartState]);

    return (
        <CartDispatchContext.Provider value={cartDispatch}>
            <CartStateContext.Provider value={cartState}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
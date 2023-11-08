import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('state ADD_TO_CART', state);
      return [...state, action.item];

    case 'LOAD_CART':
      console.log('state LOAD_CART', state);
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
    console.log('save to local storage');
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
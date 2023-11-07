import React, { createContext, useState, useContext, useReducer } from 'react';
// import ShoppingCartReducer from './reducers/ShoppingCartReducer';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('test ADD_TO_CART');
      return [...state, action.item];

    default:  
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, []);
  
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
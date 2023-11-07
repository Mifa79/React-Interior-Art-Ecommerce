// shoppingCartReducer.js

const ShoppingCartReducer = (state, action) => {
    switch (action.type) {
      // case 'ADD_TO_CART':
      //   // Check if the product is already in the cart
      //   const existingProduct = state.find(item => item.id === action.payload.id);
  
      //   if (existingProduct) {
      //     // If it's already in the cart, update the quantity
      //     return state.map(item =>
      //       item.id === action.payload.id
      //         ? { ...item, quantity: item.quantity + action.payload.quantity }
      //         : item
      //     );
      //   } else {
      //     // If it's not in the cart, add it
      //     return [...state, {
      //       id: action.id,
      //       name: action.name,
      //       pricing: action.pricing,
      //       quantity: action.quantity
      //   }];
      //   }

      case 'ADD_TO_CART':
        return [...state, {
          id: action.id,
          name: action.name,
          pricing: action.pricing,
          quantity: action.quantity
      }];


  
      // case 'EDIT_QUANTITY':
      //   return state.map(item =>
      //     item.id === action.payload.id
      //       ? { ...item, quantity: action.payload.quantity }
      //       : item
      //   );
  
      // case 'REMOVE_ITEM':
      //   return state.filter(item => item.id !== action.payload.id);
  
      default:
        return state;
    }
  };
  
  export default ShoppingCartReducer;
  
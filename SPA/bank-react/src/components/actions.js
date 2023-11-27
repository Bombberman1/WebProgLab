export const addToCart = (bank, amount) => ({
    type: 'ADD_TO_CART',
    payload: {
        bank,
        amount,
    },
});
  
export const removeFromCart = (bankId) => ({
    type: 'REMOVE_FROM_CART',
    payload: bankId,
});

export const incrementAmount = (bankId) => ({
    type: 'INCREMENT_AMOUNT',
    payload: bankId,
  });
  
  export const decrementAmount = (bankId) => ({
    type: 'DECREMENT_AMOUNT',
    payload: bankId,
  });
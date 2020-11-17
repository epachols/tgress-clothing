import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// createselector takes two arguments, the first being an array (input selectors), the second being a function that will take in and return a slice of state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

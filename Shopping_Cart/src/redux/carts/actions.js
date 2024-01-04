import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (productID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productID,
  };
};
export const increaseQuantity = (productID) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productID,
  };
};
export const decreaseQuantity = (productID) => {
  return {
    type: DECREASE_QUANTITY,
    payload: productID,
  };
};

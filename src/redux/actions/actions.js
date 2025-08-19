import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUNANTITY,
  CLEAR_CART,
} from "../actionsType";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_QUNANTITY,
  payload: { itemId, quantity },
});
export const clearCart = () => ({
  type: CLEAR_CART,
});

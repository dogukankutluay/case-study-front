import {
  CART_POPUP_SHOW_ACTION,
  ADD_CART_ACTION,
  REMOVE_CART_ACTION,
  INCRESE_CART_ACTION,
  DECREASE_CART_ACTION,
} from '../type';

export const cartPopupShowAction = decoded => {
  return {
    type: CART_POPUP_SHOW_ACTION,
    payload: decoded,
  };
};
export const addCartAction = decoded => {
  return {
    type: ADD_CART_ACTION,
    payload: decoded,
  };
};
export const removeCartAction = decoded => {
  return {
    type: REMOVE_CART_ACTION,
    payload: decoded,
  };
};
export const increaseCartAction = decoded => {
  return {
    type: INCRESE_CART_ACTION,
    payload: decoded,
  };
};
export const decreaseCartAction = decoded => {
  return {
    type: DECREASE_CART_ACTION,
    payload: decoded,
  };
};

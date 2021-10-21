import {
  CART_POPUP_SHOW_ACTION,
  ADD_CART_ACTION,
  REMOVE_CART_ACTION,
  DECREASE_CART_ACTION,
  INCRESE_CART_ACTION,
} from '../type';

const initalState = {
  data: [],
  popupShow: false,
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CART_POPUP_SHOW_ACTION:
      return {
        ...state,
        popupShow: action.payload,
      };
    case ADD_CART_ACTION:
      let currentItem = state.data.find(item => item.id === action.payload.id);
      if (currentItem && currentItem.quantity < 9) {
        currentItem.quantity++;
      } else if (!currentItem) {
        state.data = [...state.data, action.payload];
      }
      return {
        ...state,
      };
    case REMOVE_CART_ACTION:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };
    case INCRESE_CART_ACTION:
      let currentCartItem1 = state.data.find(
        item => item.id === action.payload.id
      );
      if (currentCartItem1 && currentCartItem1.quantity < 9) {
        currentCartItem1.quantity++;
      }
      return {
        ...state,
      };
    case DECREASE_CART_ACTION:
      let currentCartItem2 = state.data.find(
        item => item.id === action.payload.id
      );
      if (currentCartItem2 && currentCartItem2.quantity > 1) {
        currentCartItem2.quantity--;
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;

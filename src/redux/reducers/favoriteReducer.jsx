import { SET_CURRENT_FAVORITES } from '../type';

const initalState = {
  data: [],
};

const getAllProductReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_FAVORITES:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getAllProductReducer;

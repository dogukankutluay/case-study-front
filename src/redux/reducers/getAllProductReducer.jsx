import { GET_ALL_PRODUCT } from '../type';

const initalState = {
  data: [],
};

const getAllProductReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getAllProductReducer;

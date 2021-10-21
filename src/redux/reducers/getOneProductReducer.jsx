import { GET_ONE_PRODUCT } from '../type';

const initalState = {
  data: {},
};

const getOneProductReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default getOneProductReducer;

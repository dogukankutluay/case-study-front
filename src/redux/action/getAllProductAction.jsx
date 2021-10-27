import { GET_ALL_PRODUCT } from '../type';
export const getAllProduct =
  ({ setLoading, data }) =>
  dispatch => {
    dispatch(setCurrentProducts(data));
    setLoading(true);
  };
export const setCurrentProducts = decoded => {
  return {
    type: GET_ALL_PRODUCT,
    payload: decoded,
  };
};

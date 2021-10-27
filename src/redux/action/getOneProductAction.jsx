import { GET_ONE_PRODUCT } from '../type';
export const getOneProduct =
  ({ setLoading, data }) =>
  dispatch => {
    dispatch(setCurrentProduct(data?.getOneProduct));

    setLoading(true);
  };
export const setCurrentProduct = decoded => {
  return {
    type: GET_ONE_PRODUCT,
    payload: decoded,
  };
};

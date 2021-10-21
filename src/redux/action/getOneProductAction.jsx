import axios from 'axios';
import { BaseUrl, ApiConfig } from '../../constants/ApiConfig';
import { GET_ONE_PRODUCT } from '../type';
export const getOneProduct =
  ({ id, setLoading }) =>
  dispatch => {
    axios
      .get(`${BaseUrl}${ApiConfig.products}/?id=${id}`)
      .then(res => {
        dispatch(setCurrentProduct(res.data.products));
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
export const setCurrentProduct = decoded => {
  return {
    type: GET_ONE_PRODUCT,
    payload: decoded,
  };
};

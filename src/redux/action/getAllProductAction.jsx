import axios from 'axios';
import { BaseUrl, ApiConfig } from '../../constants/ApiConfig';
import { GET_ALL_PRODUCT } from '../type';
export const getAllProduct =
  ({ setLoading }) =>
  dispatch => {
    axios
      .get(`${BaseUrl}${ApiConfig.products}`)
      .then(res => {
        dispatch(setCurrentProducts(res.data.products));
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
export const setCurrentProducts = decoded => {
  return {
    type: GET_ALL_PRODUCT,
    payload: decoded,
  };
};

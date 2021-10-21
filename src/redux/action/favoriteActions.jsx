import axios from 'axios';
import { BaseUrl, ApiConfig } from '../../constants/ApiConfig';
import { SET_CURRENT_FAVORITES } from '../type';
export const addFavorite =
  ({ body }) =>
  dispatch => {
    axios
      .post(`${BaseUrl}${ApiConfig.favorite.add}`, body)
      .then(res => {
        dispatch(getFavorites());
      })
      .catch(err => {});
  };
export const deleteFavorite =
  ({ id }) =>
  dispatch => {
    console.log(id);
    axios
      .post(`${BaseUrl}${ApiConfig.favorite.delete}`, { id })
      .then(res => {
        console.log(res);
        dispatch(getFavorites());
      })
      .catch(err => {});
  };
export const getFavorites = () => dispatch => {
  axios
    .get(`${BaseUrl}${ApiConfig.favorite.get}`)
    .then(res => {
      dispatch(setCurrentFavorites(res.data.favorites));
    })
    .catch(err => {});
};
export const setCurrentFavorites = decoded => {
  return {
    type: SET_CURRENT_FAVORITES,
    payload: decoded,
  };
};

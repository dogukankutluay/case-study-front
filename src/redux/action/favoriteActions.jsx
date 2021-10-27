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
export const getFavorites = data => dispatch => {
  dispatch(setCurrentFavorites(data.favorites));

  // axios
  //   .get(`${BaseUrl}${ApiConfig.favorite.get}`)
  //   .then(res => {
  //   })
  //   .catch(err => {});
};
export const setCurrentFavorites = decoded => {
  return {
    type: SET_CURRENT_FAVORITES,
    payload: decoded,
  };
};

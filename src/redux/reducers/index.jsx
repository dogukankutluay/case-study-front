import { combineReducers } from 'redux';
import getOneProductReducer from './getOneProductReducer';
import getAllProductReducer from './getAllProductReducer';
import favoriteReducer from './favoriteReducer';
import cartReducer from './cartReducer';
export default combineReducers({
  getOneProductReducer: getOneProductReducer,
  getAllProductReducer: getAllProductReducer,
  favoriteReducer: favoriteReducer,
  cartReducer: cartReducer,
});

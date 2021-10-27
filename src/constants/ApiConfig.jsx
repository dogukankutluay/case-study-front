const local = 'http://localhost:8080';
// const heroku = 'https://case-study-api.herokuapp.com';

export const BaseUrl = local;

export const ApiConfig = {
  products: '/api/product/getProducts',
  favorite: {
    get: '/api/product/getFavorites',
    add: '/api/product/addFavorite',
    delete: '/api/product/deleteFavorite',
  },
};

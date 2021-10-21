import { Home, Favorite, ProductDetail, Cart } from '../containers';

const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
    protected: true,
  },
  {
    name: 'favorite',
    path: '/favorite',
    exact: true,
    component: Favorite,
    protected: true,
  },
  {
    name: 'cart',
    path: '/cart',
    exact: true,
    component: Cart,
    protected: true,
  },
  {
    name: 'productDetail',
    path: '/product-detail/:id',
    exact: true,
    component: ProductDetail,
    protected: true,
  },
];

export default routes;

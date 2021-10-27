import React, { useEffect } from 'react';
import style from './favorite.module.scss';
import ProductCard from '../../components/ProductElements/ProductCard';
import { getFavorites } from '../../redux/action/favoriteActions';
import { setCurrentProduct } from '../../redux/action/getOneProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
const GET_FAVORITE = gql`
  query {
    favorites {
      _id
      id
      category
      description
      image
      price
      title
    }
  }
`;
const EmptyFavorite = () => {
  return (
    <div className={style.emptyFavoriteContainer}>
      <p>
        Henüz favorilere bir ürün eklenmemiş. Ürünleri keşfetmek için
        <a href="/"> Buraya </a>
        tıklayabilirsiniz.
      </p>
    </div>
  );
};
function Favorite() {
  document.title = 'Favorilerim';
  const favorites = useSelector(state => state.favoriteReducer.data);
  const { data } = useQuery(GET_FAVORITE);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(getFavorites(data));
    }
  }, [data, dispatch]);
  useEffect(() => {
    dispatch(setCurrentProduct({}));
  }, [dispatch]);
  return (
    <div className={style.favoriteContainer}>
      <div className={style.favoriteHead}>
        <h1>FAVORİLERİM</h1>
      </div>
      <div className={style.favoriteCenter}>
        {!favorites.length ? <EmptyFavorite /> : null}
        <p>Favorilerim listenizde {favorites.length} ürün bulunmaktadır.</p>
      </div>
      <div className={style.favoriteBottom}>
        {favorites.map((product, index) => {
          return (
            <ProductCard key={index} product={product} container="favorite" />
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;

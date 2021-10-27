import React, { useEffect, useState } from 'react';
import { BottomArrowIcon } from '../../assets/icon';
import style from './productDetail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../redux/action/getOneProductAction';
import { useParams } from 'react-router';
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from '../../redux/action/favoriteActions';
import {
  addCartAction,
  cartPopupShowAction,
} from '../../redux/action/cartActions';
import { gql, useMutation, useQuery } from '@apollo/client';
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
const GET_ONE_PRODUCT = gql`
  mutation TE($id: Int) {
    getOneProduct(id: $id) {
      id
      category
      description
      image
      price
      title
    }
  }
`;

const ADD_FAVORITE = gql`
  mutation DE($favorite: FavoriteInput) {
    addFavorite(favorite: $favorite) {
      success
      message
    }
  }
`;
const DELETE_FAVORITE = gql`
  mutation DE($id: Int) {
    deleteFavorite(id: $id) {
      success
      message
    }
  }
`;
function ProductDetail() {
  const productDetail = useSelector(state => state.getOneProductReducer.data);
  const favorites = useSelector(state => state.favoriteReducer.data);
  const [getOneProductMuta, { data }] = useMutation(GET_ONE_PRODUCT);
  const [addFavoriteMuta, { addFavoriteData }] = useMutation(ADD_FAVORITE);
  const [deleteFavoriteMuta, { deleteFavoriteData }] =
    useMutation(DELETE_FAVORITE);
  const favoritesData = useQuery(GET_FAVORITE);
  console.log(favoritesData?.data?.favorites);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  if (productDetail?.title) {
    document.title = productDetail.title;
  }
  useEffect(() => {
    getOneProductMuta({ variables: { id: Number(id) } });
  }, [getOneProductMuta, id, favoritesData]);
  useEffect(() => {
    if (data) {
      dispatch(getOneProduct({ setLoading, data }));
    }
  }, [data, dispatch, getOneProductMuta, id]);
  return (
    <>
      {loading || productDetail ? (
        <div className={style.productDetailContainer}>
          <div className={style.productDetailHead}>
            <h1>{productDetail.category}</h1>
          </div>
          <div className={style.productDetailCenter}>
            <div className={style.productDetailCenterLeft}>
              <img src={productDetail.image} alt={productDetail.image} />
            </div>
            <div className={style.productDetailCenterRight}>
              <div className={style.productInfos}>
                <span>Ürün Kodu: {productDetail.id}</span>
                <h1>{productDetail.category}</h1>
                <p>{productDetail.title}</p>
                <p>SİYAH</p>
                <h2>{productDetail.price} TL</h2>
              </div>
              <div className={style.fakeDropDown}>
                <h3>36-41</h3>
                <BottomArrowIcon />
              </div>
              <button
                onClick={() => {
                  dispatch(
                    addCartAction({
                      ...productDetail,
                      quantity: 1,
                    })
                  );
                  setTimeout(() => {
                    dispatch(cartPopupShowAction(true));
                  }, 1000);
                }}>
                SEPETE EKLE
              </button>
              <button className={style.darkBtn}>HEMEN SATIN ALIN</button>
              <div className={style.centerActions}>
                {favorites.filter(favorite => favorite.id === productDetail.id)
                  .length ? (
                  <h1
                    onClick={() => {
                      deleteFavoriteMuta({
                        variables: { id: productDetail.id },
                      });
                      setTimeout(() => {
                        favoritesData.refetch();
                      }, 1000);
                      // dispatch(deleteFavorite({ id: productDetail.id }));
                    }}>
                    FAVORİLERDEN KALDIR
                  </h1>
                ) : (
                  <h1
                    onClick={() => {
                      let favorite = productDetail;
                      delete favorite.__typename;
                      addFavoriteMuta({
                        variables: { favorite: favorite },
                      });
                      setTimeout(() => {
                        favoritesData.refetch();
                      }, 1000);

                      // dispatch(addFavorite({ body: productDetail }));
                    }}>
                    FAVORİLERE EKLE
                  </h1>
                )}
                <h1>ÜRÜN BİLGİSİ</h1>
              </div>
            </div>
          </div>
          <div className={style.productDetailBottom}>
            <div className={style.productDetailBottomHead}>
              <button>ÜRÜN BİLGİSİ</button>
              <button>MARKA HAKKINDA</button>
              <button>TESLİMAT, İADE ve DEĞİŞİM</button>
            </div>
            <div className={style.productDetailBottomCenter}>
              <ul>
                <li>{productDetail.description}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductDetail;

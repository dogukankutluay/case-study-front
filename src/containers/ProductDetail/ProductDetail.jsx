import React, { useEffect, useState } from 'react';
import { BottomArrowIcon } from '../../assets/icon';
import style from './productDetail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../redux/action/getOneProductAction';
import { useParams } from 'react-router';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/action/favoriteActions';
import {
  addCartAction,
  cartPopupShowAction,
} from '../../redux/action/cartActions';
function ProductDetail() {
  const productDetail = useSelector(state => state.getOneProductReducer.data);
  const favorites = useSelector(state => state.favoriteReducer.data);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  if (productDetail?.title) {
    document.title = productDetail.title;
  }

  useEffect(() => {
    dispatch(getOneProduct({ id, setLoading }));
  }, [dispatch, id]);
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
                      dispatch(deleteFavorite({ id: productDetail.id }));
                    }}>
                    FAVORİLERDEN KALDIR
                  </h1>
                ) : (
                  <h1
                    onClick={() => {
                      dispatch(addFavorite({ body: productDetail }));
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

import React from 'react';
import style from './cartElements.module.scss';
import {
  CloseIcon,
  SmallBottomArrowIcon,
  SmallTopArrowIcon,
} from '../../assets/icon/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCartAction,
  increaseCartAction,
  decreaseCartAction,
} from '../../redux/action/cartActions';
import {
  deleteFavorite,
  addFavorite,
} from '../../redux/action/favoriteActions';
import { useHistory } from 'react-router';
function CartCard({ cart }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(state => state.favoriteReducer.data);
  const covertReplacePrice = () => {
    const currenPrice = Number(cart?.price) * Number(cart?.quantity);
    return Number(String(currenPrice).replace(/[^0-9.-]+/g, ''));
  };
  return (
    <div className={style.cartCardContainer}>
      <img
        src={cart.image}
        alt={cart.image}
        onClick={() => {
          history.push(`/product-detail/${cart.id}`);
          history.go();
        }}
      />
      <div className={style.cartCardContainerInfos}>
        <h1>{cart.category} </h1>
        <p>Y{cart.title} </p>
        <p>Renk : KAHVERENGİ</p>
        <p>Beden : 42</p>
      </div>
      <div className={style.cartCardContainerStock}>
        <h1>Adet</h1>
        <div>
          {cart.quantity}
          <span>
            <SmallTopArrowIcon
              onClick={() => {
                dispatch(increaseCartAction(cart));
                history.go();
              }}
            />
            <SmallBottomArrowIcon
              onClick={() => {
                dispatch(decreaseCartAction(cart));
                history.go();
              }}
            />
          </span>
        </div>
      </div>
      <div className={style.cartCardContainerTotalPrice}>
        <h1>Toplam Tutar</h1>
        <div>{covertReplacePrice()} TL</div>
      </div>
      <div className={style.cartCardContainerActions}>
        <div onClick={() => dispatch(removeCartAction(cart.id))}>
          <CloseIcon />
        </div>
        {favorites.filter(favorite => favorite.id === cart.id).length ? (
          <p
            onClick={() => {
              dispatch(deleteFavorite({ id: cart.id }));
            }}>
            FAVORİLERDEN KALDIR
          </p>
        ) : (
          <p
            onClick={() => {
              dispatch(addFavorite({ body: cart }));
            }}>
            FAVORİLERE EKLE
          </p>
        )}
      </div>
    </div>
  );
}

export default CartCard;

import React from 'react';
import style from './cartPopup.module.scss';
import { CloseIcon } from '../../assets/icon';
import { useDispatch, useSelector } from 'react-redux';
import { cartPopupShowAction } from '../../redux/action/cartActions';
import { useHistory } from 'react-router';
const EmptyCartPopup = () => {
  const history = useHistory();

  return (
    <div className={style.emptyCartPopupContainer}>
      <h1>Alışveriş Sepetiniz Boş.</h1>
      <button
        onClick={() => {
          history.push('/');
          history.go();
        }}>
        ALIŞVERİŞER DEVAM ET
      </button>
    </div>
  );
};
const CartPopupCard = ({ cart }) => {
  const history = useHistory();

  return (
    <div className={style.cartPopupCardContainer}>
      <img
        src={cart.image}
        alt={cart.image}
        onClick={() => {
          history.push(`/product-detail/${cart.id}`);
          history.go();
        }}
      />
      <div className={style.cartPopupCardContainerInfos}>
        <h1>{cart.category}</h1>
        <p>{cart.title}</p>
        <p>{String(cart.price * cart.quantity).substr(0, 5)} TL</p>
      </div>
    </div>
  );
};
function CartPopup() {
  const cartDatas = useSelector(state => state.cartReducer.data);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <div className={style.cartPopupContainer}>
        <div className={style.cartPopupContainerHead}>
          <h1>SEPETİM</h1>
          <div onClick={() => dispatch(cartPopupShowAction(false))}>
            <p>Kapat</p>
            <CloseIcon />
          </div>
        </div>
        {cartDatas.length ? (
          <>
            <div className={style.cartPopupContainerCenter}>
              {cartDatas.map(cart => {
                return <CartPopupCard cart={cart} />;
              })}
            </div>
            <div className={style.cartPopupContainerBottom}>
              <button
                onClick={() => {
                  history.push('/cart');
                  history.go();
                }}>
                SEPETE GİT
              </button>
            </div>
          </>
        ) : (
          <EmptyCartPopup />
        )}
      </div>
      <div
        onClick={() => dispatch(cartPopupShowAction(false))}
        className={style.cartPopupShadow}></div>
    </>
  );
}

export default CartPopup;

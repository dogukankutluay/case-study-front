import React, { useEffect, useState } from 'react';
import style from './cart.module.scss';
import CartCard from '../../components/CartElements/CartCard';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className={style.emptyCartContainer}>
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
function Cart() {
  document.title = 'Sepetim';
  const cartDatas = useSelector(state => state.cartReducer.data);
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    let totals = [];
    cartDatas.map(cart => {
      return totals.push(cart.quantity * cart.price);
    });
    setTotalPrice(String(totals.reduce((a, b) => a + b, 0)).substr(0, 10));
  }, [cartDatas]);
  return (
    <div className={style.cartContainer}>
      <div className={style.cartContainerHead}>
        <h1>SEPETİM</h1>
      </div>
      {cartDatas.length ? (
        <div className={style.cartContainerCenter}>
          <div className={style.cartContainerCenterLeft}>
            <div className={style.cartContainerCenterLeftWrapper}>
              {cartDatas.map((cart, index) => {
                return <CartCard cart={cart} key={index} />;
              })}
            </div>
          </div>
          <div className={style.cartContainerCenterRight}>
            <div className={style.cartContainerCenterRightWrapper}>
              <div className={style.cartContainerCenterRightWrapperHead}>
                <h1>SİPARİŞ ÖZETİ</h1>
              </div>
              <div className={style.hr}></div>
              <div className={style.cartContainerCenterRightWrapperInfos}>
                <div>
                  <h1>ARA TOPLAM</h1>
                  <p>{Number(totalPrice?.replace(/[^0-9.-]+/g, ''))} TL</p>
                </div>
                <div>
                  <h1>KDV</h1>
                  <p>0 TL</p>
                </div>
                <div>
                  <h1>TOPLAM TUTAR</h1>
                  <p>{Number(totalPrice?.replace(/[^0-9.-]+/g, ''))} TL</p>
                </div>
              </div>
              <div className={style.cartContainerCenterLeftWrapperActions}>
                <button>SİPARİŞİ TAMAMLA</button>
              </div>
              <div className={style.cartContainerCenterLeftWrapperNote}>
                <p>
                  Kargo ücreti ve indirimler sipariş onayı esnasında
                  hesaplanacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;

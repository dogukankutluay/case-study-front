import React, { useState } from 'react';
import style from './productCard.module.scss';
import { CloseIcon } from '../../assets/icon';
import { deleteFavorite } from '../../redux/action/favoriteActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
function ProductCard({ container, product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setstate] = useState(false);
  return (
    <div
      className={style.productCard}
      onClick={() => {
        if (!state) {
          history.push(`/product-detail/${product.id}`);
          history.go();
        }
      }}>
      <div className={style.productCardTop}>
        <img src={product.image} alt={product.image} />
        {container === 'favorite' ? (
          <span
            onMouseMove={() => {
              setstate(true);
            }}
            onMouseLeave={() => setstate(false)}
            onClick={() => {
              dispatch(deleteFavorite({ id: product.id }));
            }}>
            <h1>SİL</h1>
            <CloseIcon />
          </span>
        ) : null}
      </div>
      <div className={style.productCardBottom}>
        <h1>{product.category}</h1>
        <p>
          {product.title.length > 30
            ? product.title.substr(1, 35) + ' ...'
            : product.title}
        </p>
        <span>{product.price} TL</span>
      </div>
    </div>
  );
}

export default ProductCard;

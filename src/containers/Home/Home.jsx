import React, { useState, useEffect } from 'react';
import Slider from '../../components/HomeElements/Slider/Slider';
import style from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProduct } from '../../redux/action/getAllProductAction';
import { setCurrentProduct } from '../../redux/action/getOneProductAction';
import ProductCard from '../../components/ProductElements/ProductCard';
function Home() {
  const products = useSelector(state => state.getAllProductReducer.data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Ana Sayfa';
    dispatch(getAllProduct({ setLoading }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(setCurrentProduct({}));
  }, [dispatch]);
  return (
    <div className={style.homePage}>
      <Slider />
      <div className={style.homePageProductWrapper}>
        {loading || products
          ? products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Home;

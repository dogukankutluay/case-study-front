import React, { useState, useEffect } from 'react';
import Slider from '../../components/HomeElements/Slider/Slider';
import style from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProduct } from '../../redux/action/getAllProductAction';
import { setCurrentProduct } from '../../redux/action/getOneProductAction';
import ProductCard from '../../components/ProductElements/ProductCard';
import { gql, useQuery } from '@apollo/client';
const GET_PRODUCTS = gql`
  query {
    products {
      id
      category
      description
      image
      price
      title
    }
  }
`;
function Home() {
  const products = useSelector(state => state.getAllProductReducer.data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    document.title = 'Ana Sayfa';
    if (data) {
      dispatch(getAllProduct({ setLoading, data: data.products }));
    }
  }, [data, dispatch]);
  useEffect(() => {
    dispatch(setCurrentProduct({}));
  }, [dispatch]);
  return (
    <div className={style.homePage}>
      <Slider />
      <div className={style.homePageProductWrapper}>
        {loading || products?.length
          ? products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Home;

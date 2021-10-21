import React from 'react';
import { LeftArrowIcon, RightArrowIcon } from '../../../assets/icon/index';
import style from './slider.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';
function Slider() {
  const datas = [
    'https://cdn.shopify.com/s/files/1/0495/4285/6869/files/dekstopana_sayfa_70f06a5b-e16f-4a78-9e9f-dceaa86ed996.jpg?v=1634546496',
    'https://cdn.shopify.com/s/files/1/0495/4285/6869/files/rhude_2.jpg?v=1632817307',
  ];
  return (
    <div className={style.sliderContainer}>
      <Carousel
        swiping={true}
        className={style.sliderCarousel}
        leftArrow={<LeftArrowIcon className={style.leftArrow} />}
        rightArrow={<RightArrowIcon className={style.rightArrow} />}>
        {datas.map((item, index) => {
          return <img src={item} alt={item} key={index} />;
        })}
      </Carousel>
      ,
    </div>
  );
}

export default Slider;

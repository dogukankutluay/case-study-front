import React from 'react';
import style from './navbar.module.scss';
import {
  BasketIcon,
  PersonIcon,
  SearchIcon,
  HeartIcon,
  ArtIcon,
} from '../../assets/icon';
import { useDispatch, useSelector } from 'react-redux';
import { cartPopupShowAction } from '../../redux/action/cartActions';
const NavBarTop = () => {
  const dispatch = useDispatch();
  const cartDatas = useSelector(state => state.cartReducer.data);

  return (
    <div className={style.navbarTop}>
      <ul>
        <li>4 Saatte Teslimat</li>
        <li>Ücretsiz Kargo</li>
        <li>Kapıda Ödeme</li>
      </ul>
      <div className={style.navbarTopButtons}>
        <ul>
          <li>TR</li>
          <li>
            <a href="/favorite">
              <HeartIcon />
            </a>
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <PersonIcon />
          </li>
          <li onClick={() => dispatch(cartPopupShowAction(true))}>
            <BasketIcon />
            <span>{cartDatas.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
const NavBarContainer = ({ scrolled }) => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarContainerWrapper}>
        <h1>
          <a href="/" style={{ color: 'inherit' }}>
            shopi go
          </a>
        </h1>
        <ul>
          <li>En Yeniler</li>
          <li>Markalar</li>
          <li>Kadın</li>
          <li>Erkek</li>
          <li>Sneakers</li>
          <li>Ev</li>
          <li>Teknoloji & Outdoor</li>
          <li>Kişisel Bakım</li>
          <li>Hediye</li>
          <li>İndirim</li>
        </ul>
        <ArtIcon scrolled={scrolled} />
      </div>
    </div>
  );
};
function NavBar({ scrolled }) {
  return (
    <nav className={style.navBar}>
      <NavBarTop />
      <NavBarContainer scrolled={scrolled} />
    </nav>
  );
}

export default NavBar;

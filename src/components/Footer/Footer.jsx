import React from 'react';
import style from './footer.module.scss';
import { TwitterIcon, InstagramIcon, FacebookIcon } from '../../assets/icon';
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.leftFooter}>
          <div className={style.leftFooterContainer}>
            <div className={style.top}>
              <h1>E-BÜLTEN</h1>
              <div className={style.hr}></div>
            </div>
            <div className={style.center}>
              <p>
                Haber bültenimize kolayca kaydolun, en güncel haberlerimizi ilk
                siz öğrenin.
              </p>
              <input
                className={style.defaultInput}
                type="text"
                placeholder={'E-Posta Adresi'}
              />
              <label>
                <input type="checkbox" />
                <p>Bülten e-postaları almayı kabul ediyorum</p>
              </label>
            </div>
            <div className={style.bottom}>
              <button>Gönder</button>
            </div>
          </div>
        </div>
        <div className={style.rightFooter}>
          <ul className={style.rightFooterHead}>
            <li>KURUMSAL</li>
            <li>MÜŞTERİ HİZMETLERİ</li>
            <li>BAĞLAN</li>
          </ul>
          <div className={style.hr}></div>
          <div className={style.rightFooterBottom}>
            <ul>
              <li>HAKKIMIZDA</li>
              <li>MAĞAZA</li>
              <li>KARİYER</li>
              <li>BASIN</li>
              <li>İLETİŞİM</li>
              <li>SANATÇI BAŞVURUSU</li>
            </ul>
            <ul>
              <li>GÜVENLİ ALIŞVERİŞ</li>
              <li>GİZLİLİK İLKELERİ</li>
              <li>KVKK</li>
              <li>TESLİMAT İADE DEĞİŞİM</li>
              <li>SIK SORULAN SORULAR</li>
              <li>TEKNİK SÖZLÜK</li>
            </ul>
            <ul>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>
          <h1>© 2021 SHOPI GO.</h1> Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

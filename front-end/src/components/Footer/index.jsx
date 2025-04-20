import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__top}>
          <div className={s.footer__info}>
            <p className={s.footer__text}>4002-8922</p>
          </div>
          <div className={s.footer__social}>
            <a href="https://facebook.com" className={s.footer__social_link}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className={s.footer__social_link}>
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className={s.footer__social_link}>
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" className={s.footer__social_link}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" className={s.footer__social_link}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={s.footer__bottom}>
          <div className={s.footer__links}>
            <ul className={s.footer__list}>
              <li className={s.footer__item}>
                <a href="https://vainaweb.com.br/" className={s.footer__link}>
                  Layout desenvolvido pela Vai Na Web para fins educativos -
                  2024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

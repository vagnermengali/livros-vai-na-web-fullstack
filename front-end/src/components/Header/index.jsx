import React, { useState } from "react";
import s from "./header.module.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__logo}>
          <img src="./assets/icons/logo.svg" alt="Logo" />
        </div>
        <nav className={s.header__nav}>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              <a href="/">Início</a>
            </li>
            <li className={s.header__item}>
              <a href="/livros-doados">Livros Doados</a>
            </li>
            <li className={s.header__item}>
              <a href="/quero-doar">Quero Doar</a>
            </li>
          </ul>
        </nav>
        <form className={s.header__search} onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className={s.header__input}
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="O que você procura?"
          />
          <button type="submit" className={s.header__button}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2863 20.4043L11.9668 13.2628C11.3859 13.7162 10.7178 14.0752 9.96266 14.3397C9.20747 14.6042 8.40387 14.7364 7.55187 14.7364C5.44122 14.7364 3.65491 14.0232 2.19295 12.5968C0.730982 11.1704 0 9.42752 0 7.3682C0 5.30888 0.730982 3.56602 2.19295 2.13961C3.65491 0.713204 5.44122 0 7.55187 0C9.66252 0 11.4488 0.713204 12.9108 2.13961C14.3728 3.56602 15.1037 5.30888 15.1037 7.3682C15.1037 8.19949 14.9682 8.98354 14.6971 9.72036C14.426 10.4572 14.0581 11.109 13.5934 11.6758L20.9129 18.8173L19.2863 20.4043ZM7.55187 12.4693C9.00415 12.4693 10.2386 11.9733 11.2552 10.9815C12.2718 9.98958 12.7801 8.78516 12.7801 7.3682C12.7801 5.95124 12.2718 4.74682 11.2552 3.75495C10.2386 2.76308 9.00415 2.26714 7.55187 2.26714C6.09959 2.26714 4.86515 2.76308 3.84855 3.75495C2.83195 4.74682 2.32365 5.95124 2.32365 7.3682C2.32365 8.78516 2.83195 9.98958 3.84855 10.9815C4.86515 11.9733 6.09959 12.4693 7.55187 12.4693Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

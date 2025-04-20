import React from "react";
import s from "./home.module.scss";

const Home = () => {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.hero__content}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="./assets/images/banner-mobile.png"
            />
            <img src="./assets/images/banner.png" alt="Banner" />
          </picture>
        </div>
      </section>
      <section className={s.features}>
        <h1 className={s.features__title}>Por que devo doar?</h1>
        <div className={s.features__list}>
          <div className={s.features__item}>
            <img
              src="./assets/icons/feature-1.svg"
              alt="Feature 1"
              className={s.features__image}
            />
            <p className={s.features__text}>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </div>
          <div className={s.features__item}>
            <img
              src="./assets/icons/feature-2.svg"
              alt="Feature 2"
              className={s.features__image}
            />
            <p className={s.features__text}>
              Estimula o hábito da leitura e o aprendizado contínuo.
            </p>
          </div>

          <div className={s.features__item}>
            <img
              src="./assets/icons/feature-3.svg"
              alt="Feature 2"
              className={s.features__image}
            />
            <p className={s.features__text}>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>

          <div className={s.features__item}>
            <img
              src="./assets/icons/feature-4.svg"
              alt="Feature 2"
              className={s.features__image}
            />
            <p className={s.features__text}>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React, { useState } from "react";
import axios from "axios";
import s from "./donate.module.scss";

const QueroDoar = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    image_url: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      console.log("Enviando:", formData);

      const response = await axios.post(
        "https://api-livros-px42.onrender.com/doar",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Resposta da API:", response.data);
      setMessage("✅ Livro cadastrado com sucesso!");
      setFormData({ titulo: "", categoria: "", autor: "", image_url: "" });
    } catch (error) {
      console.error(
        "Erro ao cadastrar livro:",
        error.response?.data || error.message
      );
      setMessage(
        `❌ Erro: ${error.response?.data?.message || "Erro desconhecido"}`
      );
    }
  };

  return (
    <main className={s.donate}>
      <h1 className={s.donate__title}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h1>
      <article className={s.donate__form}>
        <h2 className={s.donate__form_title}>
          <svg
            width="58"
            height="37"
            viewBox="0 0 58 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7917 27.3334C16.8153 27.3334 18.7851 27.5266 20.7011 27.9131C22.6171 28.2995 24.5223 28.8792 26.4167 29.6521V7.90004C24.6514 7.01671 22.7785 6.35421 20.798 5.91254C18.8174 5.47087 16.8153 5.25004 14.7917 5.25004C13.2417 5.25004 11.7025 5.37886 10.174 5.6365C8.64553 5.89414 7.17087 6.2806 5.75004 6.79587V28.6584C7.25699 28.2167 8.75317 27.8855 10.2386 27.6646C11.724 27.4438 13.2417 27.3334 14.7917 27.3334ZM31.5834 29.6521C33.4778 28.8792 35.383 28.2995 37.299 27.9131C39.215 27.5266 41.1848 27.3334 43.2084 27.3334C44.7584 27.3334 46.2761 27.4438 47.7615 27.6646C49.2469 27.8855 50.7431 28.2167 52.25 28.6584V6.79587C50.8292 6.2806 49.3546 5.89414 47.8261 5.6365C46.2976 5.37886 44.7584 5.25004 43.2084 5.25004C41.1848 5.25004 39.1827 5.47087 37.2021 5.91254C35.2216 6.35421 33.3487 7.01671 31.5834 7.90004V29.6521ZM29 36.1667C26.9334 34.7681 24.6945 33.6823 22.2834 32.9094C19.8723 32.1365 17.375 31.75 14.7917 31.75C12.9834 31.75 11.2073 31.9525 9.46358 32.3573C7.71983 32.7622 6.05143 33.3327 4.45837 34.0688C3.55421 34.4737 2.68233 34.4552 1.84275 34.0136C1.00317 33.5719 0.583374 32.9278 0.583374 32.0813V5.47087C0.583374 5.06601 0.701777 4.67955 0.938582 4.3115C1.17539 3.94344 1.5306 3.6674 2.00421 3.48337C3.98476 2.60004 6.05143 1.93754 8.20421 1.49587C10.357 1.05421 12.5528 0.833374 14.7917 0.833374C17.2889 0.833374 19.7323 1.10942 22.1219 1.6615C24.5115 2.21358 26.8042 3.04171 29 4.14587C31.1959 3.04171 33.4886 2.21358 35.8782 1.6615C38.2677 1.10942 40.7112 0.833374 43.2084 0.833374C45.4473 0.833374 47.6431 1.05421 49.7959 1.49587C51.9487 1.93754 54.0153 2.60004 55.9959 3.48337C56.4695 3.6674 56.8247 3.94344 57.0615 4.3115C57.2983 4.67955 57.4167 5.06601 57.4167 5.47087V32.0813C57.4167 32.9278 56.9969 33.5719 56.1573 34.0136C55.3177 34.4552 54.4459 34.4737 53.5417 34.0688C51.9487 33.3327 50.2802 32.7622 48.5365 32.3573C46.7927 31.9525 45.0167 31.75 43.2084 31.75C40.625 31.75 38.1278 32.1365 35.7167 32.9094C33.3056 33.6823 31.0667 34.7681 29 36.1667Z"
              fill="#005695"
            />
          </svg>
          Informações do Livro
        </h2>
        <form onSubmit={handleSubmit} className={s.donate__form_group}>
          <input
            type="text"
            name="titulo"
            className={s.donate__input}
            placeholder="Título"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="categoria"
            className={s.donate__input}
            placeholder="Categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="autor"
            className={s.donate__input}
            placeholder="Autor"
            value={formData.autor}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="image_url"
            className={s.donate__input}
            placeholder="Link da Imagem"
            value={formData.image_url}
            onChange={handleChange}
            required
          />
          {message && <p className={s.donate__message}>{message}</p>}
          <button type="submit" className={s.donate__button}>
            Doar
          </button>
        </form>
      </article>
    </main>
  );
};

export default QueroDoar;

import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./donate-books.module.scss";

const LivrosDoados = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get("https://api-livros-px42.onrender.com/livros");
        setLivros(response.data.livros);
      } catch (error) {
        setError("Erro ao carregar os livros.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchLivros();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={s.donated__books}>
      <h1 className={s.donated__title}>Livros Doados</h1>
      <div className={s.donated__books_container}>
        {livros.map((book) => (
          <div key={book.id} className={s.donated__book_card}>
            <img
              src={book.image_url}
              alt={book.titulo}
              className={s.donated__book_image}
            />
            <h2 className={s.donated__book_title}>{book.titulo}</h2>
            <p className={s.donated__book_author}>{book.autor}</p>
            <p className={s.donated__book_category}>{book.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivrosDoados;

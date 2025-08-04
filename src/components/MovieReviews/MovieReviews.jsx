import { useEffect, useState } from "react";
import { fetchReviews } from "../../movie-api";
import { useParams } from "react-router-dom";
import style from "./MovieReviews.module.css";
const MovieCast = () => {
  const [content, setContent] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchReviews(movieId);
      setContent(response);
    };
    fetch();
  }, [movieId]);
  return content.length > 0 ? (
    <section className={style.castSection} aria-labelledby="cast-heading">
      <div className={style.castGrid}>
        {content.map((c) => (
          <article key={c.id} className={style.card}>
            <h3>{c.author}</h3>
            <p>{c.content}</p>
          </article>
        ))}
      </div>
    </section>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default MovieCast;

import { useEffect, useState } from "react";
import { fetchCast } from "../../movie-api";
import { useParams } from "react-router-dom";
import style from "./MovieCast.module.css";
const MovieCast = () => {
  const [cast, setCase] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchCast(movieId);
      setCase(response);
    };
    fetch();
  }, [movieId]);
  return (
    <section className={style.castSection} aria-labelledby="cast-heading">
      <div className={style.castGrid}>
        {cast.map((c) => (
          <article key={c.id} className={style.card}>
            <img
              src={
                c.profile_path
                  ? `https://image.tmdb.org/t/p/w300${c.profile_path}`
                  : "https://placehold.co/300x450?text=No+Image&font=roboto"
              }
              alt={`Portrait of ${c.original_name}`}
              className={style.image}
            />
            <div className={style.info}>
              <h3>{c.original_name}</h3>
              <p>
                <strong>Character:</strong>
                <br /> {c.character}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MovieCast;

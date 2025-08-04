import style from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={style.movieUl}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                className={style.navLink}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;

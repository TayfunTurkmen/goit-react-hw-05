import style from "./MoviesPage.module.css";
import { fetchSearchedMovie } from "../../movie-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!currentQuery) return;
    const fetchMovies = async () => {
      try {
        const response = await fetchSearchedMovie(currentQuery);
        setQueryMovies(response);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };
    fetchMovies();
  }, [currentQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={style.movieDiv}>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className={style.movieInput}
            type="text"
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {queryMovies.length > 0 && <MovieList movies={queryMovies} />}
    </>
  );
};

export default MoviesPage;

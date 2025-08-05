import React, { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdbApi.js';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (loading) return <p>Loading movie...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  return (
    <div className={styles.container}>
      {/* Üst detay alanı sabit kalır */}
      <div className={styles.topSection}>
        <Link to={backLink.current} className={styles.goBack}>← Go back</Link>
        <div className={styles.details}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <div className={styles.info}>
            <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
            <p><strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(g => g.name).join(' ')}</p>
          </div>
        </div>
        <hr />
        <div className={styles.additional}>
          <h3>Additional information</h3>
          <ul>
            <li><NavLink to="cast">Cast</NavLink></li>
            <li><NavLink to="reviews">Reviews</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Cast ve Reviews burada üst kısmı aşağı itmeden açılır */}
      <div className={styles.bottomSection}>
        <Outlet />
      </div>
    </div>
  );
}

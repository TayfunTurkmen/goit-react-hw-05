import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/tmdbApi.js';
import styles from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (err) {
        setError('Failed to load cast');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>{error}</p>;
  if (cast.length === 0) return <p>No cast info available.</p>;

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://via.placeholder.com/200x300'
            }
            alt={actor.name}
          />
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

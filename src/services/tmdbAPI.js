import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjgxYzU0ZjYwNWE0OGVkNTAzMGI3MWY1NjdlYTUwNiIsIm5iZiI6MTc1NDE0OTE0NC4xODgsInN1YiI6IjY4OGUzMTE4NGNjNzM5MDFiNzYxZWI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UY2-rLS9-mGBymYPxPjT6Slz4BgdqCU5gqUNlAmMmmE';

const options = {
  headers: {
    Authorization: ACCESS_TOKEN,
  },
};

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?query=${query}`, options);
  return res.data.results;
};

export const getMovieDetails = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return res.data;
};

export const getMovieCast = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return res.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return res.data.results;
};

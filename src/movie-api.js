import axios from "axios";

// https://api.themoviedb.org/3/movie/{movie_id}/credits
//const queryMoviesUrl = `${baseUrl}search/movie?query=${searchQuery}`;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzU2NTJkZDFlZmZjNzhjYmRiN2IyNWE3ZmY1YTczNiIsIm5iZiI6MTc0OTAxMzcxNy4wMjksInN1YiI6IjY4M2ZkNGQ1Nzc2YjViZjVlMDdiYjVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VTKgl7SLVx2XdvAHKy2AW5xLIK2h9ts-MuBS8PnEbEc",
  },
  params: {
    language: "en-US",
  },
});

export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get("trending/movie/day");
  return response.data.results;
};

export const fetchSelectedMovie = async (id) => {
  const response = await axiosInstance.get(`movie/${id}`);
  return response.data;
};
export const fetchCast = async (id) => {
  const response = await axiosInstance.get(`movie/${id}/credits`);
  return response.data.cast;
};
export const fetchReviews = async (id) => {
  const response = await axiosInstance.get(`movie/${id}/reviews`);
  return response.data.results;
};
export const fetchSearchedMovie = async (q) => {
  const response = await axiosInstance.get(`search/movie?query=${q}`);
  return response.data.results;
};

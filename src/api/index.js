import axios from "axios";

const API_KEY = "e6e0dd53c79220875187320b4265f3d6";
const BASE_URL = "https://api.themoviedb.org/3/";

const popularMoviesApi = () => {
  return axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko`);
};

const nowPlayingMoviesApi = () => {
  return axios.get(
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=ko`
  );
};

const searchMoviesApi = (term) => {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=ko&query=${encodeURIComponent(
      term
    )}`
  );
};

const searchTVApi = (term) => {
  return axios.get(
    `${BASE_URL}search/tv?api_key=${API_KEY}&language=ko&query=${encodeURIComponent(
      term
    )}`
  );
};

export default {
  popularMoviesApi,
  nowPlayingMoviesApi,
  searchMoviesApi,
  searchTVApi,
};

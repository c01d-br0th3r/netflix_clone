import axios from "axios";

const API_KEY = "e6e0dd53c79220875187320b4265f3d6";
const BASE_URL = "https://api.themoviedb.org/3/";

const popularMoviesApi = () => {
  return axios.get(
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`
  );
};

export default { popularMoviesApi };

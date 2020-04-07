import React, { useState } from "react";
import axios from "axios";
import "./search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieLoading, setMovieLoading] = useState(true);
  const [tvs, setTVs] = useState([]);
  const [tvLoading, setTVLoading] = useState(true);
  const API_KEY = "e6e0dd53c79220875187320b4265f3d6";
  const BASE_URL = "https://api.themoviedb.org/3/";

  const handleChange = (event) => {
    const nowInput = event.target.value;
    setInput(nowInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") searchByTerm(input);
  };

  const searchByTerm = async (term) => {
    try {
      const {
        data: { results: movieResults },
      } = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=ko&query=${encodeURIComponent(
          term
        )}`
      );
      setMovies([...movieResults]);

      const {
        data: { results: tvResults },
      } = await axios.get(
        `${BASE_URL}search/tv?api_key=${API_KEY}&language=ko&query=${encodeURIComponent(
          term
        )}`
      );
      setTVs([...tvResults]);
    } catch (error) {
      console.log(error);
    } finally {
      setMovieLoading(false);
      setTVLoading(false);
    }
  };

  console.log(movies);
  console.log(tvs);

  return (
    <div className="Container">
      <form onSubmit={handleSubmit} className="userForm">
        <input
          className="userInput"
          type="text"
          onChange={handleChange}
          placeholder="검색어를 입력하세요."
        />
      </form>
      <div>
        <div className="title">Search Movies</div>
        <div>
          {movieLoading ? (
            <div className="loading">검색</div>
          ) : (
            <div className="resultsContainer">
              {movies.map((m) => (
                <div className="results" key={m.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${m.poster_path}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="title">Search TVs</div>
        <div>
          {tvLoading ? (
            <div className="loading">검색</div>
          ) : (
            <div className="resultsContainer">
              {tvs.map((t) => (
                <div className="results" key={t.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${t.poster_path}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

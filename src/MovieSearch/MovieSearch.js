import "./MovieSearch.css";
import { useState } from "react";
import PropTypes from "prop-types";

export function MovieSearch({
  setMovies,
  setIsLoading,
  setHasSearched,
  setLastSearch,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=902755be`;

  const getMovies = async () => {
    setIsLoading(true);
    setSearchTerm("");
    try {
      const response = await fetch(API_URL);
      const movies = await response.json();
      if (movies.Search) {
        setMovies(movies.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setHasSearched(true);
    setLastSearch(searchTerm);
  };
  return (
    <form className="movie-search-form">
      <label className="movie-search-label" for="search">
        Search
      </label>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        name="search"
        value={searchTerm}
        className="movie-search-input"
        placeholder="Jaws: The Revenge"
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          getMovies();
        }}
        className="movie-search-btn"
      >
        Submit
      </button>
    </form>
  );
}

MovieSearch.propTypes = {
  setMovies: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
  setLastSearch: PropTypes.func.isRequired,
};

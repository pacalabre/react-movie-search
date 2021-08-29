import "./MovieSearch.css";
import { useState } from "react";

export function MovieSearch({ setMovies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=902755be`;

  const getMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const movies = await response.json();
      setMovies(movies.Search);
      setSearchTerm("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="movie-search-form">
      <label>Search For Movies</label>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
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
        Search
      </button>
    </form>
  );
}

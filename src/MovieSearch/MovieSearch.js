import "./MovieSearch.css";
import { useState } from "react";

export function MovieSearch({ setMovies, setIsLoading, setHasSearched }) {
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=902755be`;

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(API_URL);
      const movies = await response.json();
      if (movies.Search) {
        setMovies(movies.Search);
      } else {
        setMovies([]);
      }
      setSearchTerm("");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setHasSearched(true);
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

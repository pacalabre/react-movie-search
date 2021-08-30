import "./App.css";
import { useState, useEffect } from "react";
import { MovieSearch } from "./MovieSearch/MovieSearch";
import { MovieDropdown } from "./MovieDropdown/MovieDropdown";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({ name: "", poster: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    setSelectedMovie({ name: "", poster: "" });
  }, [movies]);

  return (
    <main className="App">
      <h1>Find Movie Posters</h1>
      <MovieSearch
        setHasSearched={setHasSearched}
        setIsLoading={setIsLoading}
        setMovies={setMovies}
        setLastSearch={setLastSearch}
      />
      {isLoading === true && <div className="loader"></div>}
      <MovieDropdown
        isLoading={isLoading}
        hasSearched={hasSearched}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
        lastSearch={lastSearch}
      />
      {selectedMovie.name.length > 0 && isLoading !== true && (
        <img
          className="movie-poster"
          alt={`${selectedMovie.name} movie poster`}
          src={selectedMovie.poster}
        />
      )}
    </main>
  );
}

export default App;

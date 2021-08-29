import "./App.css";
import { useState, useEffect } from "react";
import { MovieSearch } from "./MovieSearch/MovieSearch";
import { MovieDropdown } from "./MovieDropdown/MovieDropdown";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({ name: "", poster: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setSelectedMovie({ name: "", poster: "" });
  }, [movies]);

  return (
    <main className="App">
      <MovieSearch
        setHasSearched={setHasSearched}
        setIsLoading={setIsLoading}
        setMovies={setMovies}
      />
      {isLoading === true && <p>Loading...</p>}
      <MovieDropdown
        hasSearched={hasSearched}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
      {selectedMovie.name.length > 0 && (
        <img
          alt={`${selectedMovie.name} movie poster`}
          src={selectedMovie.poster}
        />
      )}
    </main>
  );
}

export default App;

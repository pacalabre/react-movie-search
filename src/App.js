import "./App.css";
import { useState, useEffect } from "react";
import { MovieSearch } from "./MovieSearch/MovieSearch";
import { MovieDropdown } from "./MovieDropdown/MovieDropdown";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({ name: "", poster: "" });

  useEffect(() => {
    console.log("use effect", selectedMovie);
  }, [selectedMovie]);
  return (
    <main className="App">
      <MovieSearch setMovies={setMovies} />
      <MovieDropdown movies={movies} setSelectedMovie={setSelectedMovie} />
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

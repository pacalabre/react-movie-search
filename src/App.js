import "./App.css";
import { useState } from "react";
import { MovieSearch } from "./MovieSearch/MovieSearch";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <main className="App">
      <MovieSearch movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default App;

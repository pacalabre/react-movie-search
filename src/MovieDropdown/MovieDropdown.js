import "./MovieDropdown.css";

export function MovieDropdown({ movies, selectedMovie, setSelectedMovie }) {
  return (
    <section>
      <select
        onChange={(event) => {
          event.preventDefault();
          setSelectedMovie((prevState) => ({
            ...prevState,
            name: event.target.value,
            poster: event.target.selectedOptions[0].dataset.poster,
          }));
        }}
      >
        <option>Select One</option>
        {movies.map((movie) => {
          return (
            <option key={movie.imdbID} data-poster={movie.Poster}>
              {movie.Title}
            </option>
          );
        })}
      </select>
    </section>
  );
}

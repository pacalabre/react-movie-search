import "./MovieDropdown.css";

export function MovieDropdown({
  movies,
  selectedMovie,
  setSelectedMovie,
  hasSearched,
}) {
  if (movies.length > 0) {
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
  if (movies.length < 1 && hasSearched) {
    return <p>No Results Found</p>;
  } else {
    return null;
  }
}

import "./MovieDropdown.css";
import PropTypes from "prop-types";

export function MovieDropdown({
  movies,
  setSelectedMovie,
  hasSearched,
  lastSearch,
  isLoading,
}) {
  if (movies.length > 0 && isLoading !== true) {
    return (
      <section>
        <h2>Search Results For "{lastSearch}"</h2>
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
          <option>Select a Poster</option>
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
  if (movies.length < 1 && hasSearched && isLoading !== true) {
    return <p>No Results Found for "{lastSearch}"</p>;
  } else {
    return null;
  }
}

MovieDropdown.propTypes = {
  movies: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  hasSearched: PropTypes.bool.isRequired,
  lastSearch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import PropTypes from "prop-types";
import SearchForm from "../components/SearchForm";
import * as moviesApi from "../services/moviesApi";

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // console.log(url);
  function hendleOnSubmit(query) {
    setSearchQuery(query);
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    moviesApi.fetchMovieByQuery(searchQuery).then(({ results }) => {
      setMovies(results);
    });
  }, [searchQuery]);

  return (
    <div>
      <p> Movies Page</p>
      <SearchForm onSubmit={hendleOnSubmit} />
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

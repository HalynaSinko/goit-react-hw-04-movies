import { useState, useEffect } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import SearchForm from "../components/SearchForm";
import * as moviesApi from "../services/moviesApi";
import MoviesGallery from "../components/MoviesGallery";

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search).get("query");

  const [searchQuery, setSearchQuery] = useState(query ?? "");
  const [movies, setMovies] = useState([]);

  function hendleOnSubmit(query) {
    setSearchQuery(query);
    history.push({ ...location, search: `query=${query}` });
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
        <MoviesGallery movies={movies} url={url} location={location} />
      )}
    </div>
  );
}

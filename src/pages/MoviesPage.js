import { useState, useEffect } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import SearchForm from "../components/SearchForm";
import * as moviesApi from "../services/moviesApi";
import MoviesGallery from "../components/MoviesGallery/MoviesGallery";

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const location = useLocation();
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
        <MoviesGallery movies={movies} url={url} location={location} />
      )}
    </div>
  );
}

// {
//   /* <li key={movie.id}>
//               <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
//             </li> */
// }

//  to={{
//                 pathname: `${url}/${movie.id}`,
//                 state: { from: location },
//               }}

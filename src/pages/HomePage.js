import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as moviesApi from "../services/moviesApi";
import PageHeading from "../components/PageHeading";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    moviesApi
      .fetchTrendingMovies()
      .then(({ results }) => setTrendingMovies(results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {trendingMovies && (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as moviesApi from "../services/moviesApi";
import PageHeading from "../components/PageHeading";
import MoviesGallery from "../components/MoviesGallery";

export default function HomePage() {
  const location = useLocation();
  // const { url } = useRouteMatch();
  const [trendingMovies, setTrendingMovies] = useState(null);
  // console.log("location", location);

  // console.log("url", url);
  useEffect(() => {
    moviesApi
      .fetchTrendingMovies()
      .then(({ results }) => setTrendingMovies(results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {trendingMovies && (
        <MoviesGallery
          movies={trendingMovies}
          url={"/movies"}
          location={location}
        />
      )}
    </>
  );
}

//  <ul>
//    {trendingMovies.map((movie) => (
//      <MoviesItem
//        key={movie.id}
//        to={{
//          pathname: `/movies/${movie.id}`,
//          state: { from: location },
//        }}
//        title={movie.title}
//      />
//    ))}
//  </ul>;

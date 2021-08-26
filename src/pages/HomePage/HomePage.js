import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as moviesApi from "../../services/moviesApi";
import PageHeading from "../../components/PageHeading";
import MoviesGallery from "../../components/MoviesGallery";

export default function HomePage() {
  const location = useLocation();

  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    moviesApi
      .getTrendingMovies()
      .then(({ results }) => {
        setTrendingMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
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

import { useState, useEffect } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";

import * as moviesApi from "../services/moviesApi";
import PageHeading from "../components/PageHeading";
import GoBack from "../components/GoBack";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import img_movie from "../images/photo_movie.svg";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(url, path);

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const genres = movie ? movie.genres.map((item) => item.name).join(" ") : null;

  return (
    <>
      <GoBack />
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `${BASE_IMG_URL}${movie.poster_path}`
                : img_movie
            }
            alt={movie.title}
            width="300px"
            height="auto"
          />
          <div>
            <PageHeading text={movie.title} />
            <p>User scope:{movie.vote_average * 10}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>{genres}</p>
            <hr />
            <ul>
              Additional information
              <li key={"cast"}>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li key={"reviews"}>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
            <hr />
            <Route path={`${path}/cast`}>
              {movie && <Cast movieId={movieId} />}
            </Route>
            <Route path={`${path}/reviews`}>
              {movie && <Reviews movieId={movieId} />}
            </Route>
          </div>
        </div>
      )}
    </>
  );
}

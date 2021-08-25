import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import * as moviesApi from "../../services/moviesApi";
import PageHeading from "../../components/PageHeading";
import Button from "../../components/Button";
import img_movie from "../../images/photo_movie.svg";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "reviews"*/)
);

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/movies");
  };
  const genres = movie ? movie.genres.map((item) => item.name).join(" ") : null;

  return (
    <>
      <Button onClick={onGoBack} nameButton={"Go back"} />
      {movie && (
        <div className={s.movieCard}>
          <img
            src={
              movie.poster_path
                ? `${BASE_IMG_URL}${movie.poster_path}`
                : img_movie
            }
            alt={movie.title}
            width="300px"
            height="400px"
            className={s.cardImg}
          />
          <div>
            <PageHeading text={movie.title} />
            <p>User scope:{movie.vote_average * 10}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>{genres}</p>
            <hr />
            <ul className={s.addInfo}>
              Additional information
              <li key={"cast"}>
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: { from: location?.state?.from ?? "/movies" },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li key={"reviews"}>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: location?.state?.from ?? "/movies" },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path={`${path}/cast`}>
                {movie && <Cast movieId={movieId} />}
              </Route>
              <Route path={`${path}/reviews`}>
                {movie && <Reviews movieId={movieId} />}
              </Route>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}

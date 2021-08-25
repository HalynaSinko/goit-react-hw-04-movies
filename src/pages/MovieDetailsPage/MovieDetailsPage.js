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
import Button from "../../components/Button";
import MovieDetailsInfo from "../../components/MovieDetailsInfo";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "reviews"*/)
);

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
  const genres = movie
    ? movie.genres.map((genre) => genre.name).join(" ")
    : null;

  return (
    <>
      <Button onClick={onGoBack} nameButton={"Go back"} />
      {movie && (
        <>
          <MovieDetailsInfo
            posterPath={movie.poster_path}
            movieTitle={movie.title}
            voteAverage={movie.vote_average}
            overview={movie.overview}
            genres={genres}
          />

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
        </>
      )}
    </>
  );
}

<div className={s.movieCard}></div>;

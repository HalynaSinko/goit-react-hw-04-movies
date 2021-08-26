import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import * as moviesApi from "../../services/moviesApi";
import Button from "../../components/Button";
import MovieDetailsInfo from "../../components/MovieDetailsInfo";
import NavBarMovieDetails from "../../components/NavBarMovieDetails";
import routes from "../../routes";

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
    moviesApi.getMovieDetails(movieId).then(setMovie);
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
          <NavBarMovieDetails url={url} location={location} />
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path={`${path}${routes.pathSubPageCast}`}>
              {movie && <Cast movieId={movieId} />}
            </Route>
            <Route path={`${path}${routes.pathSubPageReviews}`}>
              {movie && <Reviews movieId={movieId} />}
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}

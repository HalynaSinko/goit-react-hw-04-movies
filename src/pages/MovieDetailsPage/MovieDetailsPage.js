import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

import * as moviesApi from "../../services/moviesApi";
import Button from "../../components/Button";
import MovieDetailsInfo from "../../components/MovieDetailsInfo";
import NavBarMovieDetails from "../../components/NavBarMovieDetails";
import RouteingSubPage from "./Routing/Routing";

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/movies");
  };

  return (
    <>
      <Button onClick={onGoBack} nameButton={"Go back"} />
      {movie && (
        <>
          <MovieDetailsInfo movie={movie} />

          <hr />
          <NavBarMovieDetails location={location} />
          <hr />

          <RouteingSubPage movie={movie} />
        </>
      )}
    </>
  );
}

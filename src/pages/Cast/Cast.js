import { useState, useEffect } from "react";

import * as moviesApi from "../../services/moviesApi";
import CastList from "../../components/CastList";

const Cast = ({ movieId }) => {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    moviesApi.getActorsMovie(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);
  return (
    <>
      {actors && actors.length > 0 ? (
        <CastList actors={actors} />
      ) : (
        "We don't have any information about actors this movie."
      )}
    </>
  );
};

export default Cast;

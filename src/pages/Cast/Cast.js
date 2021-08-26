import { useState, useEffect } from "react";

import * as moviesApi from "../../services/moviesApi";
import s from "./Cast.module.css";
import iconProfile from "../../images/person_profile.svg";

const Cast = ({ movieId }) => {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    moviesApi.getActorsMovie(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);
  return (
    <>
      {actors && actors.length > 0 ? (
        <ul className={s.actorsList}>
          {actors.map((actor) => (
            <li key={actor.id} className={s.actorsItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : iconProfile
                }
                alt={actor.name}
                width="200px"
                height="auto"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any information about actors this movie."
      )}
    </>
  );
};

export default Cast;

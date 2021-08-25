import { BASE_IMG_URL } from "../../services/moviesApi";
import img_movie from "../../images/photo_movie.svg";

import PageHeading from "../PageHeading";
import PropTypes from "prop-types";
import s from "./MovieDetailsInfo.module.css";

const MovieDetailsInfo = ({
  posterPath,
  movieTitle,
  voteAverage,
  overview,
  genres,
}) => {
  return (
    <div className={s.mainInfoCard}>
      <img
        src={posterPath ? `${BASE_IMG_URL}${posterPath}` : img_movie}
        alt={movieTitle}
        width="300px"
        height="400px"
        className={s.cardImg}
      />
      <div>
        <PageHeading text={movieTitle} />
        <p>User scope:{voteAverage * 10}%</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        <p>{genres}</p>
      </div>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  posterPath: PropTypes.string,
  movieTitle: PropTypes.string,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieDetailsInfo;

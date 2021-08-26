import { BASE_IMG_URL } from "../../services/moviesApi";
import img_movie from "../../images/photo_movie.svg";

import PageHeading from "../PageHeading";
import PropTypes from "prop-types";
import s from "./MovieDetailsInfo.module.css";

const MovieDetailsInfo = ({ movie }) => {
  const genres = movie
    ? movie.genres.map((genre) => genre.name).join(" ")
    : null;

  return (
    <div className={s.mainInfoCard}>
      <img
        src={
          movie.poster_path ? `${BASE_IMG_URL}${movie.poster_path}` : img_movie
        }
        alt={movie.title}
        width="300px"
        height="400px"
        className={s.cardImg}
      />
      <div>
        <PageHeading text={movie.title} />
        <p>User scope:{movie.vote_average * 10}%</p>
        <b>Overview</b>
        <p>{movie.overview}</p>
        <b>Genres</b>
        <p>{genres}</p>
      </div>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  movie: PropTypes.shape({
    posterPath: PropTypes.string,
    movieTitle: PropTypes.string,
    voteAverage: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};

export default MovieDetailsInfo;

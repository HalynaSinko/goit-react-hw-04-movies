import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesItem.module.css";

const MoviesItem = ({ url, location, movie }) => {
  return (
    <li className={s.moviesItem}>
      <Link
        to={{
          pathname: `${url}/${movie.id}`,
          state: { from: location },
        }}
      >
        {movie.title}
      </Link>
    </li>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  movie: PropTypes.array,
};

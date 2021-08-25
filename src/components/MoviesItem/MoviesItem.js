import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesItem.module.css";

const MoviesItem = ({ url, location, movieId, title }) => {
  return (
    <li className={s.moviesItem}>
      <Link
        to={{
          pathname: `${url}/${movieId}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

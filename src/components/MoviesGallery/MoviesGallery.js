import MoviesItem from "../MoviesItem";
import PropTypes from "prop-types";
import s from "./MoviesGallery.module.css";

const MoviesGallery = ({ movies, url, location }) => {
  return (
    <ul className={s.galleryList}>
      {movies.map((movie) => (
        <MoviesItem
          key={movie.id}
          url={url}
          location={location}
          movieId={movie.id}
          title={movie.title}
        />
      ))}
    </ul>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  movies: PropTypes.array,
  url: PropTypes.string.isRequired,
};

// MoviesGallery.propTypes = {
//   location: { state: null },
// };

//  location: PropTypes.shape({
//     hash: PropTypes.string,
//     key: PropTypes.string.isRequired,
//     pathname: PropTypes.string.isRequired,
//     search: PropTypes.string,
//     state: PropTypes.string,
//   }).

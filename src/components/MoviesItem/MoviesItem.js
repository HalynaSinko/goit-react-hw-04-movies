import { Link } from "react-router-dom";

const MoviesItem = ({ url, location, movieId, title }) => {
  return (
    <li>
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

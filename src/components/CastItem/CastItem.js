import PropTypes from "prop-types";
import iconProfile from "../../images/person_profile.svg";
import s from "./CastItem.module.css";

const CastItem = ({ actor }) => {
  return (
    <li className={s.actorsItem}>
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
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
    </li>
  );
};

CastItem.propTypes = {
  actor: PropTypes.object,
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};

export default CastItem;

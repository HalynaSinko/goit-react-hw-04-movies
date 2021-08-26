import CastItem from "../CastItem";
import PropTypes from "prop-types";

import s from "./CastList.module.css";

const CastList = ({ actors }) => {
  return (
    <ul className={s.actorsList}>
      {actors.map((actor) => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  actor: PropTypes.array,
};
export default CastList;

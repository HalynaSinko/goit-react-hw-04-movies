import { NavLink, useRouteMatch } from "react-router-dom";
import s from "./NavBarMovieDetails.module.css";

const NavBarMovieDetails = ({ location }) => {
  const { url } = useRouteMatch();

  return (
    <ul className={s.addInfo}>
      Additional information
      <li key={"cast"}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location?.state?.from ?? "/movies" },
          }}
        >
          Cast
        </NavLink>
      </li>
      <li key={"reviews"}>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location?.state?.from ?? "/movies" },
          }}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
export default NavBarMovieDetails;

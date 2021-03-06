import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navList}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activLink}>
        Home
      </NavLink>

      <NavLink to="/movies" className={s.link} activeClassName={s.activLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

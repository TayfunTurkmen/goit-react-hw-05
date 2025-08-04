import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header>
        <nav className={style.headerNav}>
          <NavLink
            className={({ isActive }) => {
              return `${style.navLink} ${isActive ? style.isActive : ""}`;
            }}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `${style.navLink} ${isActive ? style.isActive : ""}`;
            }}
            to={"/movies"}
          >
            Movies
          </NavLink>
        </nav>{" "}
      </header>
    </div>
  );
};

export default Navigation;

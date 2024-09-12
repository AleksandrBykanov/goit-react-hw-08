import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogin = useSelector(selectAuthIsLoggedIn)
  
  return (
    <>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {isLogin && <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/contacts"
      >
        Contacts
      </NavLink>}
    </>
  );
};

export default Navigation;

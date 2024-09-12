import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <>
      <p className={css.p}>Welcome {user.name}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
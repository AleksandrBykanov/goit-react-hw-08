import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <>
      <p className={css.p}>Welcome {user.name}</p>
      <button className={css.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
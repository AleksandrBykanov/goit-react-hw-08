import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
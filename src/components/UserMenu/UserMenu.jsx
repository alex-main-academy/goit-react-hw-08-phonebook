import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const userToken = useSelector(state => state.auth.user.token);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogOut(userToken));
  };

  return (
    <div className={css.header__user}>
      <span>{userEmail}</span>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default UserMenu;

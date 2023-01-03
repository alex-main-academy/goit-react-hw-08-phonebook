import { StyledLink } from './NavBar.styled';
import css from './NavBar.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <header className={css.header}>
      <div className="container">
        <nav>
          <ul className={css.header__list}>
            <li className={css.header__item}>
              <StyledLink to="contacts">PhoneBook</StyledLink>
            </li>
            {isAuth ? (
              <UserMenu />
            ) : (
              <>
                {' '}
                <li className={css.header__item_left}>
                  <StyledLink to="register">SignIn</StyledLink>
                </li>
                <li className={css.header__item}>
                  <StyledLink to="login">LogIn</StyledLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

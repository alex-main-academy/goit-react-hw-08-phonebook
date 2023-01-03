import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from 'redux/auth/authOperations';
import css from './LogIn.module.css';
import { Audio } from 'react-loader-spinner';

const LogIn = () => {
  const dispatch = useDispatch();
  const isContentLoad = useSelector(state => state.auth.isFormLoad);

  const handleLogIn = event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(userLogIn({ email, password }));

    event.currentTarget.reset();
  };

  return isContentLoad ? (
    <div style={{ margin: '100px auto 0 auto', width: '80px' }}>
      <Audio height="80" width="80" radius="9" color="green" />
    </div>
  ) : (
    <section className={css.login}>
      <div className="container">
        <h2 className={css.login__title}>Log in your account</h2>
        <form className={css.login__form} onSubmit={handleLogIn}>
          <label className={css.login__label}>
            <input
              type="email"
              placeholder="Enter your email..."
              required
              name="email"
              className={css.login__input}
            />
          </label>
          <label className={css.login__label}>
            <input
              type="password"
              placeholder="Enter your passord..."
              required
              name="password"
              className={css.login__input}
            />
          </label>
          <button className={css.login__button}>SignIn</button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;

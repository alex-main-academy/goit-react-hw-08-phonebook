import { useDispatch } from 'react-redux';
import { userSignIn } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import css from './SignIn.module.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const isContentLoad = useSelector(state => state.auth.isFormLoad);

  const handleSignIn = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(userSignIn({ name, email, password }));

    event.currentTarget.reset();
  };

  return isContentLoad ? (
    <div style={{ margin: '100px auto 0 auto', width: '80px' }}>
      <Audio height="80" width="80" radius="9" color="green" />
    </div>
  ) : (
    <section className={css.sign}>
      <div className="container">
        <h2 className={css.sign__title}>Create your account</h2>
        <form className={css.sign__form} onSubmit={handleSignIn}>
          <label className={css.sign__label}>
            <input
              type="text"
              placeholder="Enter your name..."
              required
              name="name"
              className={css.sign__input}
            />
          </label>
          <label className={css.sign__label}>
            <input
              type="email"
              placeholder="Enter your email..."
              required
              name="email"
              className={css.sign__input}
            />
          </label>
          <label className={css.sign__label}>
            <input
              type="password"
              placeholder="Enter your password..."
              name="password"
              required
              className={css.sign__input}
            />
          </label>
          <button className={css.sign__button}>SignIn</button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;

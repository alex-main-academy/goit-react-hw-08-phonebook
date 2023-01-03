import css from './Welcome.module.css';
import lockImage from './lock.png';

const Welcome = () => {
  return (
    <section className={css.welcome}>
      <h1 className={css.welcome__title}>
        If you want to open your book with contacts, please sign in or log in
      </h1>
      <img src={lockImage} alt="lock" className={css.welcome__image} />
    </section>
  );
};

export default Welcome;

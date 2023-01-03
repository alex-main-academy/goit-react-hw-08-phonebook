import { useDispatch } from 'react-redux';
import { filterArray } from 'redux/addContactSlice';
import css from './SearchContact.module.css';

const SearchContact = () => {
  const dispatch = useDispatch();

  return (
    <section className={css.search}>
      <h2 className={css.search__title}>Contacts:</h2>
      <form className={css.search__form}>
        <label className={css.find__contacts}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={event => dispatch(filterArray(event.target.value))}
          />
        </label>
      </form>
    </section>
  );
};

export default SearchContact;

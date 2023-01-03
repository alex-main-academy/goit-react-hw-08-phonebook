import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Audio } from 'react-loader-spinner';
import css from './ContactsList.module.css';
import deleteImg from './delete.png';

const ContactsList = () => {
  let userContacts = useSelector(state => state.phoneBook.contacts.item);
  const searchFilter = useSelector(state => state.phoneBook.filter);
  const isLoading = useSelector(state => state.phoneBook.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (searchFilter !== '') {
    userContacts = userContacts.filter(({ name }) =>
      name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }

  return isLoading ? (
    <div className={css.contacts__loader}>
      <Audio height="80" width="80" radius="9" color="green" />
    </div>
  ) : (
    <ul className={css.contacts__list}>
      {userContacts.length === 0 ? (
        <p>Your book is empty...</p>
      ) : (
        userContacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={css.contacts__item}>
              <span className={css.contacts__name}>{name}</span> {number}
              <button
                className={css.contacts__delete}
                onClick={() => dispatch(deleteContact(id))}
              >
                <img src={deleteImg} alt="delet" />
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default ContactsList;

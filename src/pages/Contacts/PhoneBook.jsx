import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactsList/ContactsList';
import SearchContact from '../../components/SearchContact/SearchContact';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.phoneBook.contacts.item);

  const handleAddContact = (event, name, number, handleClearState) => {
    event.preventDefault();

    if (contactsArray.find(item => item.name.includes(name))) {
      alert('You can not add user with this name');
      handleClearState();
      return;
    }

    dispatch(addContact({ name, number }));

    handleClearState();
  };

  return (
    <section className="phonebook container">
      <h1 className="phonebook__title">Phone book</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchContact />
      <ContactsList />
    </section>
  );
};

export default PhoneBook;

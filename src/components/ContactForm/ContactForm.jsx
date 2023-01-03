import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleClearState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={event =>
        handleAddContact(event, name, number, handleClearState)
      }
      className={css.contact__form}
    >
      <label className={css.contact__name}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <label className={css.contact__number}>
          <input
            type="tel"
            name="number"
            placeholder="Number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </label>
      </label>
      <button className={css.contact__button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;

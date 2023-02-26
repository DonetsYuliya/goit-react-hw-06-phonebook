import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import css from './style.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const isFilteredContacts = getFilteredContacts();

  const item = isFilteredContacts.map(({ id, name, number }) => {
    return (
      <li className={css.item} key={id}>
        {name}: {number}{' '}
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{item}</ul>;
};

export default ContactsList;

import { useSelector, useDispatch } from 'react-redux';
import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter';
import { addContact, deleteContact } from './actions';
import { setFilter } from 'redux/filters/actions';
import css from './style.module.css';

export const MyContacts = () => {
  const queryContacts = useSelector(state => state.contacts);
  //   const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    dispatch(addContact(name, number));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return queryContacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();
  //   const result = contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(normalizedFilter);
  //   });

  //   return result;
  // };

  return (
    <div>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <PhonebookForm onSubmit={addNewContact} />
        <h2 className={css.title}>Contacts</h2>
        <ContactsFilter handleFilter={handleFilter} />
        <ContactsList contact={queryContacts} removeContact={removeContact} />
      </div>
    </div>
  );
};

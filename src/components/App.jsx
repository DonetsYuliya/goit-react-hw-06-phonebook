import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

export const App = () => {
  return (
    <>
      <PhonebookForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

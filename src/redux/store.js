import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filters/filterSlice';

// const preloadedState = () => {
//   const contacts = JSON.parse(localStorage.getItem('my-contacts'));
//   return contacts
//     ? { contacts: contacts, filter: '' }
//     : { contacts: [], filter: '' };
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

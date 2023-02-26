import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const preloadedState = () => {
  const contacts = JSON.parse(localStorage.getItem('my-contacts'));
  return contacts
    ? { contacts: contacts, filter: '' }
    : { contacts: [], filter: '' };
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, preloadedState(), enhancer);

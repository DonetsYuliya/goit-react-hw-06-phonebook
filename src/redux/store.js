import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Viki',
      number: '12-12-12',
    },
    {
      id: 2,
      name: 'Didi',
      number: '20-20-20',
    },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

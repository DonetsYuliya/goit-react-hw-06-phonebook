import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import App from 'components/App';
import './index.css';
import { MyContacts } from 'redux/contacts/constant';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <MyContacts />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>
);

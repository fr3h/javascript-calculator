import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
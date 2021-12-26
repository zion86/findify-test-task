import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.App')
);
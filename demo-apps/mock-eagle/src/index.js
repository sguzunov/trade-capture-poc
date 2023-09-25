import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ag-grid-community/styles/ag-grid.css';
import '@glue42/theme/dist/t42bootstrap.bundle.css'
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Glue from '@glue42/desktop';

Glue({ appManager: 'full' })
  .then((glue) => {
    window.glue = glue;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <App />
    );
  })




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';

// CONTEXT
import { MyFavsProvider } from './ContextAPI/MyFavsContext';

ReactDOM.render(
  <React.StrictMode>
    <MyFavsProvider>
      <App />
    </MyFavsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

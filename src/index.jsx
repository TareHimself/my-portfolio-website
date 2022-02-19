import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Home } from './routes/routes';

function App() {
  return (
    <Home/>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


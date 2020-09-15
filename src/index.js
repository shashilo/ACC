import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './shared/styles/main.scss';
import { Routes } from './routes';
import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Routes />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

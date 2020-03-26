import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './reset.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Components/Home';
import About from './Components/About';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Route exact path="/" component={Home} /> 
      <Route path="/about" component={About} />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

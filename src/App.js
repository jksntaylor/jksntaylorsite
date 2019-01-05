import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Web from './components/web';
import Photos from './components/photos';
import About from './components/about';
import Contact from './components/contact';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollTrigger from 'scrolltrigger-classes'

class App extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      new ScrollTrigger()
    })
  }

  render() {
    return (
      // <BrowserRouter>
        <div className='app-component-container'>
          <Header />
          <Home />
          <Web />
          <Photos />
          <About />
          <Contact />
          <div className='footer-container'></div>
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;

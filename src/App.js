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
          <About />
          <Web />
          <Photos />
          <Contact />
          <div className='footer-container'>
            <p>This website was hand-coded by yours truly! Have a look in the source code! If you can find an improvement i'll give you a high five</p>
            <p>&copy; 2019 JKSNTAYLOR</p>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;

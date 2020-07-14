import React, { Component } from 'react';
import './App.css';
import Header from  './Header/Header.js';
import Main from  './Main/Main.js';
import Footer from './Main/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

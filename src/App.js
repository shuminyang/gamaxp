import React, { Component } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;

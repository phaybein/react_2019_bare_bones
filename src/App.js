import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

// STYLES
import './app.scss';

export class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
      </>
    );
  }
}

export default App;

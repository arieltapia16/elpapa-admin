import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';

class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;

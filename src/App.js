import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Board from './components/board';
import { height } from 'window-size';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{display:"flex", minHeight: "80vh"}}>
          <Sidebar />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;

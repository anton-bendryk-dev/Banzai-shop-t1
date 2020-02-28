import React from 'react';
import logo from './images/logo.png';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="inline-wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;

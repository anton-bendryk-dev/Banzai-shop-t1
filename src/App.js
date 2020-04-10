import React from 'react';
import './App.scss';
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="inline-wrapper">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

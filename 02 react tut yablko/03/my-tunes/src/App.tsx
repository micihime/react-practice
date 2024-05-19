import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <main>
        <img src={logo} className='App-logo' alt='logo' />
      </main>
    </div>
  );
}

export default App;
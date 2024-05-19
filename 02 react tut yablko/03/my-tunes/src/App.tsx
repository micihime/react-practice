import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main className='content'>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/tunes" element={<h1>Tunes</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </main>
      <footer>
        <img src={logo} className='App-logo' alt='logo' />
      </footer>
    </div>
  );
}

export default App;
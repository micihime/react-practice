import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemon">Pokemon</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/pokemon" element={<h1>Pokemon</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
        
      </main>
      <footer>
        <p>This is React app for learning purposes, leveraging PokeAPI.</p>
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out PokeAPI
        </a>
        <p>Created by: Miči</p>
      </footer>
    </div>
  );
}

export default App;

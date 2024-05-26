import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TheNavigation from './components/TheNavigation';
import TheFooter from './components/TheFooter';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheNavigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/pokemon" element={<h1>Pokemon</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </main>
      <footer>
        <TheFooter />
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import TheNavigation from './components/TheNavigation';
import TheFooter from './components/TheFooter';

//views
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import About from './views/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheNavigation />
      </header>
      <main>
        <Routes>
          <Route path="/" Component={ Home } />
          <Route path="/pokemon" Component={ Pokemon } />
          <Route path="/about" Component={ About } />
        </Routes>
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
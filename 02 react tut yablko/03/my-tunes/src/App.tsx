import React from 'react';
import { Routes, Route } from 'react-router-dom';

//styles & assets
import logo from './assets/logo.svg';
import './App.scss';

//components
import TheNavigation from './components/TheNavigation'

function App() {
  return (
    <div className="App">
      <header>
        <TheNavigation />
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
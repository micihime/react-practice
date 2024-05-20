import React from 'react';
import { Routes, Route } from 'react-router-dom';

//styles & assets
import logo from './assets/logo.svg';
import './App.scss';

//components
import TheNavigation from './components/TheNavigation'

//views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
  return (
    <div className="App">
      <header>
        <TheNavigation />
      </header>
      <main className='content'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/tunes" Component={Tunes} />
          <Route path="/about" Component={About} />
        </Routes>
      </main>
      <footer>
        <img src={logo} className='App-logo' alt='logo' />
      </footer>
    </div>
  );
}

export default App;
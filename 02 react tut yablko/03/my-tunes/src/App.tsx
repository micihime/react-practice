import React from 'react';
import { Routes, Route } from 'react-router-dom';

//styles
import './App.scss';

//components
import TheNavigation from './components/TheNavigation'

//views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
  const a = "example"

  return (
    <div className="App">
      <header>
        <TheNavigation brand={a} howMany={1}/>
      </header>
      <main className='content'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/tunes" Component={Tunes} />
          <Route path="/about" Component={About} />
        </Routes>
      </main>
      <footer>
        <TheNavigation howMany={20-7*3+275}/>
      </footer>
    </div>
  );
}

export default App;
import React from 'react'
import { Routes, Route } from 'react-router-dom';

//views
import Home from '../views/Home';
import Pokemon from '../views/Pokemon';
import About from '../views/About';

const TheMain: React.FC = () => {
    return (
        <main>
            <Routes>
              <Route path="/" Component={ Home } />
              <Route path="/pokemon" Component={ Pokemon } />
              <Route path="/about" Component={ About } />
            </Routes>
        </main>
    )
}

export default TheMain;
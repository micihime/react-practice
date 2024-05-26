import React from 'react';

//components
import TheNavigation from './components/TheNavigation';
import TheMain from './components/TheMain';
import TheFooter from './components/TheFooter';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheNavigation />
      </header>
      <TheMain />
      <TheFooter />
    </div>
  );
}

export default App;
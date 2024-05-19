import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dude></Dude>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Guy />
    </div>
  );
}

function Dude() {
  return (
    <div>
      <h1>Dude</h1>
      <p>Test test test.</p>
    </div>
  ) 
}

class Guy extends React.Component {
  render() {
    return <p>Another test.</p>
  }
}

export default App;
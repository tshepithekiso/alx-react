import React from 'react';
import './App.css';
import logo from './holberton_logo.png';
import { getFullYear, getFooterCopy } from './utils'; // Import utility functions

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p> {/* Use the utility function */}
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p> {/* Use the utility function */}
      </footer>
    </div>
  );
}

export default App;

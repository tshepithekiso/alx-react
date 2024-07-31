import React from "react";
import "./App.css";
import logo from "./holberton_logo.png";
import { getFullYear, getFooterCopy } from "./utils"; // Import utility functions

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* OK button */}
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;

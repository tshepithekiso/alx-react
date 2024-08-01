// Login.js
import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className="App-login">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;


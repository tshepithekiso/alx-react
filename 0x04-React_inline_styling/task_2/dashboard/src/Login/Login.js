import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: '2rem 0',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
});

export default Login;


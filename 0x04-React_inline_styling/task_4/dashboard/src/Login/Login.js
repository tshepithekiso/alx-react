import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={css(styles.input)} />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className={css(styles.input)} />
        </div>
        <button type="submit" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    marginLeft: '10px',
    '@media (max-width: 900px)': {
      marginLeft: '0',
      marginTop: '5px',
    },
  },
  button: {
    marginTop: '10px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

export default Login;


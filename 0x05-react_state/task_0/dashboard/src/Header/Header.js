import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.header)}>
      <img
        className={css(styles.logo)}
        src='https://www.holbertonschool.com/holberton-logo.png'
        alt='Holberton logo'
      />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e1354b',
    paddingBottom: '1rem',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
});

export default Header;


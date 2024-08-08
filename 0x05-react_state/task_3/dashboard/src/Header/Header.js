import React, { Component } from 'react';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<span onClick={logOut} className={css(styles.logout)}>logout</span>)
          </section>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#e1354b',
    color: 'white',
  },
  logout: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export default Header;


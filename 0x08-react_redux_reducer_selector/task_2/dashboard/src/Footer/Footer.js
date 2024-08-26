import React, { useContext } from 'react';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      <p>Copyright {new Date().getFullYear()} - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact" className={css(styles.link)}>Contact us</a>
        </p>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: '10px',
    textAlign: 'center',
    borderTop: '1px solid #e1354b',
  },
  link: {
    color: '#e1354b',
    textDecoration: 'none',
  },
});

export default Footer;


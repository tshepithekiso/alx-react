// Import necessary libraries
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

// Define the App component
class App extends React.Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <Notifications />
        <Header />
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <footer className={css(styles.footer)}>
          <p>Copyright 2020 - Holberton School</p>
        </footer>
      </div>
    );
  }
}

// Define styles using Aphrodite
const styles = StyleSheet.create({
  app: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  footer: {
    borderTop: '3px solid #e1354b',
    textAlign: 'center',
    padding: '20px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default App;


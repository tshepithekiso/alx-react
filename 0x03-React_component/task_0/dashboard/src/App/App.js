// src/App/App.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { CourseShape } from '../CourseList/CourseShape';
import { NotificationItemShape } from '../Notifications/NotificationItemShape';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', html: { __html: '<u>New notification</u>' }, value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Urgent notification' },
      ],
    };
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;

    return (
      <>
        <Notifications listNotifications={listNotifications} displayDrawer />
        {isLoggedIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
          <Login />
        )}
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.arrayOf(CourseShape),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

App.defaultProps = {
  isLoggedIn: false,
  listCourses: [],
  listNotifications: [],
};

export default App;


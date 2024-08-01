// src/Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ displayDrawer }) {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" html={{ __html: '<u>Urgent!</u>' }} />
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;


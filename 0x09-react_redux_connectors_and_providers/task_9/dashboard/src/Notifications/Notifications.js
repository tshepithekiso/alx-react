import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications, setNotificationFilter }) => {
  return (
    <div>
      <p>Here is the list of notifications:</p>
      <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
      <button onClick={() => setNotificationFilter('default')}>💠</button>
      {notifications.map(notification => (
        <NotificationItem
          key={notification.get('id')}
          id={notification.get('id')}
          message={notification.get('message')}
          isRead={notification.get('isRead')}
          isUrgent={notification.get('isUrgent')}
        />
      ))}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

export default Notifications;


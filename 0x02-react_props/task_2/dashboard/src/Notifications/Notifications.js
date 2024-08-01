// src/Notifications/Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <ul>
      <NotificationItem type="default" value="New course available" />
      <NotificationItem type="urgent" html={{ __html: '<u>Urgent!</u>' }} value="" />
      {/* Add more NotificationItem as needed */}
    </ul>
  );
}

export default Notifications;


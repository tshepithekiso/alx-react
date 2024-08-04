// Notifications.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className="NotificationsComponent">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                border: 'none',
                background: 'transparent',
              }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src="close-icon.png" alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && <li>No new notification for now</li>}
              {listNotifications.map(({ id, type, value, html }) => (
                <NotificationItem
                  key={id}
                  id={id}
                  type={type}
                  value={value}
                  html={html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead, displayDrawer } = this.props;

    return (
      <div className={css(styles.notifications)}>
        {displayDrawer && (
          <div className={css(styles.drawer)}>
            <p>Here is the list of notifications:</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem type="default" value="No new notification for now" />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  markAsRead={markNotificationAsRead}
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
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  markNotificationAsRead: PropTypes.func,
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {},
  displayDrawer: false,
};

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    border: '1px solid black',
    width: '300px',
  },
});

export default Notifications;


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notificationsPanel)}>
            <button
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src="close-icon.png" alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '20px',
  },
  notificationsPanel: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #e1354b',
    padding: '15px',
    width: '400px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      fontSize: '20px',
    },
  },
  ul: {
    padding: 0,
    listStyleType: 'none',
  },
});

export default Notifications;


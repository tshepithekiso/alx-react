import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
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
              onClick={handleHideDrawer}
            >
              <img src="close-icon.png" alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.map((notification) => (
                <li key={notification.id}>{notification.value}</li>
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
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
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

const opacityKeyframes = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounceKeyframes = {
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
};

export default Notifications;


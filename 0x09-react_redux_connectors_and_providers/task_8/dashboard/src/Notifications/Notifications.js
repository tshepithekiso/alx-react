import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter, fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { notifications, setNotificationFilter } = this.props;

    return (
      <div>
        <p>Here is the list of notifications:</p>
        <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
        <button onClick={() => setNotificationFilter('default')}>💠</button>
        <ul>
          {notifications.map(notification => (
            <li key={notification.get('id')}>
              {notification.get('message')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.instanceOf(Map).isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


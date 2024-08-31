import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import PropTypes from 'prop-types';

class Notifications extends Component {
  componentDidMount() {
    // Fetch notifications when the component mounts
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications').toList()
});

// Map dispatch to props
const mapDispatchToProps = {
  fetchNotifications
};

// Define prop types
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  fetchNotifications: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleMarkAsRead = (id) => {
    this.props.markAsRead(id);
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div>
        {listNotifications.map(notification => (
          <div key={notification.id} onClick={() => this.handleMarkAsRead(notification.id)}>
            {notification.value}
          </div>
        ))}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state)
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


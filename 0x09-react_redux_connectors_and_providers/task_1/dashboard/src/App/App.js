import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
// Other imports

class App extends Component {
  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <div className="App">
        {/* Other components and JSX */}
        <Notifications displayDrawer={displayDrawer} />
        <button onClick={displayNotificationDrawer}>Show Notifications</button>
        <button onClick={hideNotificationDrawer}>Hide Notifications</button>
        {/* Other components and JSX */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayDrawer: state.isNotificationDrawerVisible,
});

const mapDispatchToProps = (dispatch) => ({
  displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
});

App.propTypes = {
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


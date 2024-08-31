import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import { loginRequest, logout } from '../actions/uiActionCreators';
// Other imports

class App extends Component {
  handleLogin = (credentials) => {
    const { login } = this.props;
    login(credentials);
  };

  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, isLoggedIn } = this.props;

    return (
      <div className="App">
        {/* Other components and JSX */}
        <Notifications displayDrawer={displayDrawer} />
        <button onClick={displayNotificationDrawer}>Show Notifications</button>
        <button onClick={hideNotificationDrawer}>Hide Notifications</button>
        
        {/* Example usage of handleLogin */}
        <button onClick={() => this.handleLogin({ username: 'user', password: 'password' })}>
          Login
        </button>

        {isLoggedIn && (
          <button onClick={this.props.logout}>
            Logout
          </button>
        )}

        {/* Other components and JSX */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayDrawer: state.get('isNotificationDrawerVisible'),
  isLoggedIn: state.get('isLoggedIn'),
});

const mapDispatchToProps = (dispatch) => ({
  displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  login: (credentials) => dispatch(loginRequest(credentials)),
  logout: () => dispatch(logout()),
});

App.propTypes = {
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  displayDrawer: false,
  isLoggedIn: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


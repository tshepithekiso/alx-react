import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../actions/userActionCreators';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    // Any initial setup if needed
  }

  render() {
    const {
      displayDrawer,
      login,
      logout,
      user
    } = this.props;

    return (
      <div>
        <Header />
        <Notifications />
        {displayDrawer && (
          <button onClick={logout}>Logout</button>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  user: state.user // Assuming the user state is directly mapped
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout: logoutRequest
};

App.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


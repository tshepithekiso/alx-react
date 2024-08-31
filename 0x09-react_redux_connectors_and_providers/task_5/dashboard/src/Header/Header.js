import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

// Functional component Header
const Header = ({ user, logout }) => {
  return (
    <header>
      <h1>My Application</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </header>
  );
};

// mapStateToProps function to map state to props
const mapStateToProps = (state) => ({
  user: state.get('user'), // Assuming 'user' is part of the Redux state
});

// mapDispatchToProps function to map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

// Define PropTypes
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

// Define default props
Header.defaultProps = {
  user: null,
};

// Connect Header component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);


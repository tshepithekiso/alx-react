import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Functional component Footer
const Footer = ({ user }) => {
  return (
    <footer>
      <p>Footer Content</p>
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please log in to see user information.</p>}
    </footer>
  );
};

// mapStateToProps function to map state to props
const mapStateToProps = (state) => ({
  user: state.get('user'), // Assuming 'user' is a part of the Redux state
});

// Define PropTypes
Footer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

// Define default props
Footer.defaultProps = {
  user: null,
};

// Connect Footer component to Redux store
export default connect(mapStateToProps)(Footer);


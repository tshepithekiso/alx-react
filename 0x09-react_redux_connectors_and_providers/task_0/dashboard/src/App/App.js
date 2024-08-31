// task_0/dashboard/src/App/App.js

import React from 'react';
import { connect } from 'react-redux';
import { uiReducer } from '../reducers/uiReducer'; // Adjust the import path based on your project structure

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="App">
        {isLoggedIn ? (
          <h1>Welcome back!</h1>
        ) : (
          <h1>Please log in</h1>
        )}
        {/* Other components and JSX */}
      </div>
    );
  }
}

// mapStateToProps function to connect the uiReducer to the App component
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,  // Adjust based on the structure of your uiReducer
  };
};

// Connect the App component to the Redux store
export default connect(mapStateToProps)(App);


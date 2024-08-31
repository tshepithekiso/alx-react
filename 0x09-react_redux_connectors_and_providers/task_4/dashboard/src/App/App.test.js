import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // Import rootReducer
import App from './App'; // Import the App component

// Mock the store and initial state
const initialState = {
  courses: {},
  notifications: {},
  ui: {
    user: null,
    isNotificationDrawerVisible: false,
    // Add other initial state properties if needed
  }
};

const store = createStore(rootReducer, initialState);

describe('<App />', () => {
  it('should render correctly with initial state', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Update the mapStateToProps test
  it('should map state to props correctly', () => {
    const state = {
      courses: {},
      notifications: {},
      ui: {
        user: null,
        isNotificationDrawerVisible: false
      }
    };
    const props = mapStateToProps(state);
    expect(props).toEqual({
      // Expected props based on the state
      user: null,
      displayDrawer: false,
      // Add other expected props
    });
  });
});


import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { mapStateToProps } from './App';

const mockStore = configureStore([]);

describe('<App />', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    // Set up initial state with Immutable.js
    const initialState = {
      isNotificationDrawerVisible: false,
    };
    store = mockStore(fromJS(initialState));

    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive(); // Dive twice to get past the Provider and the connected component
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should pass displayDrawer prop correctly based on Redux state', () => {
    const displayDrawerProp = wrapper.prop('displayDrawer');
    expect(displayDrawerProp).toBe(false);
  });

  it('should dispatch displayNotificationDrawer action on calling displayNotificationDrawer prop', () => {
    const action = store.getActions().find(action => action.type === 'DISPLAY_NOTIFICATION_DRAWER');
    expect(action).toBeUndefined();

    wrapper.prop('displayNotificationDrawer')();

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
  });

  it('should dispatch hideNotificationDrawer action on calling hideNotificationDrawer prop', () => {
    const action = store.getActions().find(action => action.type === 'HIDE_NOTIFICATION_DRAWER');
    expect(action).toBeUndefined();

    wrapper.prop('hideNotificationDrawer')();

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'HIDE_NOTIFICATION_DRAWER' });
  });
});

describe('mapStateToProps', () => {
  it('should map isNotificationDrawerVisible state to displayDrawer prop', () => {
    const state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const props = mapStateToProps(state.toJS());
    expect(props.displayDrawer).toBe(true);
  });
});


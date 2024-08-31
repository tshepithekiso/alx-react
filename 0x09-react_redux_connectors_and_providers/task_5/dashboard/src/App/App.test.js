import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App Component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      ui: Map({ isNotificationDrawerVisible: false }),
      user: { email: 'test@example.com', password: 'password' }
    });

    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Other tests
});


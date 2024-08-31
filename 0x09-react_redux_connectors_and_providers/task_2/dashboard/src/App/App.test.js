import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'; // Import the stateless App component
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

describe('App Component', () => {
  const defaultProps = {
    displayDrawer: false,
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
    isLoggedIn: false,
  };

  it('should render correctly', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call displayNotificationDrawer on button click', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    wrapper.find('button').at(0).simulate('click');
    expect(defaultProps.displayNotificationDrawer).toHaveBeenCalled();
  });

  it('should call hideNotificationDrawer on button click', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    wrapper.find('button').at(1).simulate('click');
    expect(defaultProps.hideNotificationDrawer).toHaveBeenCalled();
  });

  it('should handle login correctly', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    wrapper.find('button').at(2).simulate('click');
    expect(defaultProps.login).toHaveBeenCalledWith({ username: 'user', password: 'password' });
  });
});


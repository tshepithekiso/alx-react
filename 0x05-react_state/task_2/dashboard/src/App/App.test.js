import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppContext, { defaultUser } from './AppContext';

describe('App Component', () => {
  it('should update the state correctly with logIn', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user')).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('should update the state correctly with logOut', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('should render CourseList when isLoggedIn is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { ...defaultUser, isLoggedIn: true } });
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('should render Login when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { ...defaultUser, isLoggedIn: false } });
    expect(wrapper.find('Login').exists()).toBe(true);
  });
});


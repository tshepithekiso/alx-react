import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext, { defaultUser } from '../App/AppContext';

describe('Header Component', () => {
  it('should not create logoutSection when isLoggedIn is false', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('should create logoutSection when isLoggedIn is true', () => {
    const user = { ...defaultUser, isLoggedIn: true, email: 'test@example.com' };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('should call logOut function on logout link click', () => {
    const logOut = jest.fn();
    const user = { ...defaultUser, isLoggedIn: true, email: 'test@example.com' };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});


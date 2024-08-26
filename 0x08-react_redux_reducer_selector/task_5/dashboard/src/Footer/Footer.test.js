import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext, { defaultUser } from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the contact link when the user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('displays the contact link when the user is logged in', () => {
    const user = { ...defaultUser, isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});


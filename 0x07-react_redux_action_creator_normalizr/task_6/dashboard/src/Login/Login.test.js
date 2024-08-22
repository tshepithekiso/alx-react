import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('should have the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable the submit button when both email and password fields are non-empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});


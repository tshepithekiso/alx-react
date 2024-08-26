// WithLogging.test.js
import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Restore the console.log function
    consoleSpy.mockRestore();
  });

  it('logs to console on mount and unmount with a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);

    // Assert the log for mounting
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount and check the log for unmounting
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs to console on mount and unmount with the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    // Assert the log for mounting
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount and check the log for unmounting
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});


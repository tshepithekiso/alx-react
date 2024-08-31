import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; // Import the stateless Header component

describe('Header Component', () => {
  const defaultProps = {
    user: null,
    logout: jest.fn(),
  };

  it('should render correctly', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display user information if user is present', () => {
    const props = {
      user: { name: 'John Doe' },
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('p').text()).toEqual('Welcome, John Doe!');
  });

  it('should display login message if user is not present', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper.find('p').text()).toEqual('Please log in.');
  });

  it('should call logout on button click', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    wrapper.find('button').simulate('click');
    expect(defaultProps.logout).toHaveBeenCalled();
  });
});


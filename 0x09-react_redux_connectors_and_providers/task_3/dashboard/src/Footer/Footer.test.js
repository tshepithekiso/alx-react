import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Import the stateless Footer component

describe('Footer Component', () => {
  const defaultProps = {
    user: null,
  };

  it('should render correctly', () => {
    const wrapper = shallow(<Footer {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display user information if user is present', () => {
    const props = {
      user: { name: 'John Doe' },
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper.find('p').at(1).text()).toEqual('Welcome, John Doe!');
  });

  it('should display login message if user is not present', () => {
    const wrapper = shallow(<Footer {...defaultProps} />);
    expect(wrapper.find('p').at(1).text()).toEqual('Please log in to see user information.');
  });
});


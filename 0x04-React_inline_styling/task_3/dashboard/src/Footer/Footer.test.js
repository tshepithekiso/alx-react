// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders text containing "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});


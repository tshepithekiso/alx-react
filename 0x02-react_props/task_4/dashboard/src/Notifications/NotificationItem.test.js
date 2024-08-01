// src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders the correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders the correct html prop', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="" />);
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });
});


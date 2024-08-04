// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem id={1} type="default" value="Test" markAsRead={() => {}} />);
  });

  it('calls markAsRead with the right ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="Test" markAsRead={markAsReadSpy} />);
    
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});


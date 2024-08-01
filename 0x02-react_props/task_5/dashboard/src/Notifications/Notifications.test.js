// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';

describe('Notifications Component', () => {
  const listNotifications = [
    { id: 1, type: 'default', html: { __html: '<u>New notification</u>' }, value: 'New course available' },
    { id: 2, type: 'urgent', value: 'Urgent notification' },
  ];

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  describe('With listNotifications empty', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={[]} />);
    });

    it('renders "No new notification for now" row', () => {
      expect(wrapper.find(NotificationItem).props().value).toBe('No new notification for now');
    });

    it('does not render the notification list', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(1);
    });
  });

  describe('With listNotifications containing elements', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer />);
    });

    it('renders the correct number of NotificationItems', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it('renders NotificationItems with correct props', () => {
      listNotifications.forEach(notification => {
        expect(wrapper.find(NotificationItem).findWhere(node => node.key() === String(notification.id)).props()).toMatchObject(notification);
      });
    });
  });
});


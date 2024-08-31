import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  let wrapper;
  let fetchNotificationsMock;
  let markAsReadMock;

  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
    markAsReadMock = jest.fn();
    wrapper = shallow(
      <Notifications
        listNotifications={[]}
        fetchNotifications={fetchNotificationsMock}
        markAsRead={markAsReadMock}
      />
    );
  });

  it('should call fetchNotifications on component mount', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should render notifications', () => {
    wrapper.setProps({ listNotifications: [{ id: 1, value: 'Test Notification' }] });
    expect(wrapper.find('div').text()).toContain('Test Notification');
  });

  it('should call markAsRead when a notification is clicked', () => {
    const notification = { id: 1, value: 'Test Notification' };
    wrapper.setProps({ listNotifications: [notification] });
    wrapper.find('div').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(notification.id);
  });
});


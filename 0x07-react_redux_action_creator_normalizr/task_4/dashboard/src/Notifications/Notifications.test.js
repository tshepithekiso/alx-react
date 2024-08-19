import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of NotificationItem components', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem').length).toBe(2);
  });

  it('displays the correct message when there are no notifications', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').prop('value')).toEqual('No new notification for now');
  });

  it('calls markNotificationAsRead when a notification is clicked', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
    wrapper.find('NotificationItem').first().simulate('click');
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});


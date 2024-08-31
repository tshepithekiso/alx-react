import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  let wrapper;
  let fetchNotificationsMock;

  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
    wrapper = shallow(
      <Notifications
        listNotifications={[]}
        fetchNotifications={fetchNotificationsMock}
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

  // Add more tests if necessary
});


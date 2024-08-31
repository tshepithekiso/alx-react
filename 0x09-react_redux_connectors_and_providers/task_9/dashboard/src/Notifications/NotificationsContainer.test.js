import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
  setNotificationFilter: jest.fn(),
}));

describe('<NotificationsContainer />', () => {
  it('should call fetchNotifications on mount', () => {
    const wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotifications} setNotificationFilter={() => {}} notifications={[]} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });
});


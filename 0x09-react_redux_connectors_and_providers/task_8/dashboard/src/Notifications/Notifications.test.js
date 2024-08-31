import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import Notifications from './Notifications';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

jest.mock('../actions/notificationActionCreators', () => ({
  setNotificationFilter: jest.fn(),
  fetchNotifications: jest.fn(),
}));

describe('<Notifications />', () => {
  let wrapper;
  const mockSetNotificationFilter = jest.fn();
  const mockFetchNotifications = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={Map()}
        fetchNotifications={mockFetchNotifications}
        setNotificationFilter={mockSetNotificationFilter}
      />
    );
  });

  it('calls setNotificationFilter with "urgent" when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('calls setNotificationFilter with "default" when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('default');
  });
});


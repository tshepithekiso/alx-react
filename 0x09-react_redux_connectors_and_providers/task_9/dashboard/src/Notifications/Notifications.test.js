import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;
  const mockSetNotificationFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={[
          { id: '1', message: 'Test Notification 1', isRead: false, isUrgent: false },
          { id: '2', message: 'Test Notification 2', isRead: false, isUrgent: true }
        ]}
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


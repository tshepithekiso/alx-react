import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('logs the right message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: 1, type: 'default', value: 'New course available' }]} />);

    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleSpy.mockRestore();
  });

  it('does not re-render when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      listNotifications,
    });

    expect(shouldUpdate).toBe(false);
  });

  it('re-renders when updating props with a longer list', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const newNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      listNotifications: newNotifications,
    });

    expect(shouldUpdate).toBe(true);
  });
});


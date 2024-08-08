import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('logs the right message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
      />
    );

    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );

    consoleSpy.mockRestore();
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );

    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});


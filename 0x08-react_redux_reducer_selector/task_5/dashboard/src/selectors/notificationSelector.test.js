// task_5/dashboard/src/selectors/notificationSelector.test.js

import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: 'URGENT',
    notifications: {
      1: { id: 1, isRead: true, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    },
  });

  it('filterTypeSelected should return the filter value from the state', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('URGENT');
  });

  it('getNotifications should return the list of notifications from the state', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, isRead: true, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });

  it('getUnreadNotifications should return only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });
});


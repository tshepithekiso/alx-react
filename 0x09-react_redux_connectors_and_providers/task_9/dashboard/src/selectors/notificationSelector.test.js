import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('Selectors', () => {
  it('should return all unread notifications when the filter is set to "default"', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, message: 'Notification 1', isRead: false, isUrgent: false },
        2: { id: 2, message: 'Notification 2', isRead: false, isUrgent: true },
      },
      filter: 'default',
    });

    const result = getUnreadNotificationsByType(state);
    expect(result.toJS()).toEqual([
      { id: 1, message: 'Notification 1', isRead: false, isUrgent: false },
      { id: 2, message: 'Notification 2', isRead: false, isUrgent: true }
    ]);
  });

  it('should return only unread urgent notifications when the filter is set to "urgent"', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, message: 'Notification 1', isRead: false, isUrgent: false },
        2: { id: 2, message: 'Notification 2', isRead: false, isUrgent: true },
      },
      filter: 'urgent',
    });

    const result = getUnreadNotificationsByType(state);
    expect(result.toJS()).toEqual([
      { id: 2, message: 'Notification 2', isRead: false, isUrgent: true }
    ]);
  });
});


import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Selector to get the filter state from the store
const getFilter = (state) => state.get('filter');

// Selector to get the notifications from the store
const getNotifications = (state) => state.get('notifications');

// Selector to get the unread notifications based on filter
export const getUnreadNotificationsByType = createSelector(
  [getFilter, getNotifications],
  (filter, notifications) => {
    const unreadNotifications = notifications
      .filter(notification => !notification.get('isRead'));

    switch (filter) {
      case 'urgent':
        return unreadNotifications.filter(notification => notification.get('type') === 'urgent');
      case 'default':
      default:
        return unreadNotifications;
    }
  }
);


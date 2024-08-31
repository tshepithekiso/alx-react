import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Selector to get unread notifications
const getNotifications = (state) => state.notifications.get('notifications', Map());

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.get('isRead')).valueSeq().toJS()
);


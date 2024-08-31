import { MARK_AS_READ, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const markAsRead = (id) => ({
  type: MARK_AS_READ,
  id
});

// Other existing action creators...


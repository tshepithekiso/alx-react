import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map({}),
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', Map(action.notifications.reduce((acc, notification) => {
        acc[notification.id] = Map(notification);
        return acc;
      }, {})));
    case MARK_AS_READ:
      return state.update('notifications', notifications => notifications.update(action.id, notification => notification.set('isRead', true)));
    default:
      return state;
  }
};

export default notificationReducer;


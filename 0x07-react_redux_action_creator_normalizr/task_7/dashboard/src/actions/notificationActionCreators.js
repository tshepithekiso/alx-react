// task_6/dashboard/src/actions/notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Bound action creators
export const boundMarkAsAread = (dispatch) => bindActionCreators(markAsAread, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);


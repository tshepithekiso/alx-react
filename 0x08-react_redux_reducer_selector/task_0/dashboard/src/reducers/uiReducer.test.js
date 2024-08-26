// task_0/dashboard/src/reducers/uiReducer.test.js

import { uiReducer } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('should set isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('should set isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('should set isUserLoggedIn to false when LOGOUT is passed', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.isUserLoggedIn).toBe(false);
  });
});


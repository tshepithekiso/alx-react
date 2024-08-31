import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionCreators';

describe('uiReducer', () => {
  const initialState = Map({
    user: null,
    isLoggedIn: false,
    error: null,
    isNotificationDrawerVisible: false,
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = { name: 'John Doe' };
    const action = { type: LOGIN_SUCCESS, payload: user };
    const newState = uiReducer(initialState, action);
    expect(newState.get('user')).toEqual(user);
    expect(newState.get('isLoggedIn')).toBe(true);
  });

  it('should handle LOGOUT', () => {
    const stateWithUser = initialState
      .set('user', { name: 'John Doe' })
      .set('isLoggedIn', true);
    const action = { type: LOGOUT };
    const newState = uiReducer(stateWithUser, action);
    expect(newState.get('user')).toBeNull();
    expect(newState.get('isLoggedIn')).toBe(false);
  });

  // Additional tests for other actions...
});


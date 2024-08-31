import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map({}),
    loading: false,
  });

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = { type: SET_LOADING_STATE, isLoading: true };
    const expectedState = initialState.set('loading', true);
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [{ id: 1, type: 'default', value: 'Test' }];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, notifications };
    const expectedState = initialState.set('notifications', Map({ 1: { id: 1, type: 'default', value: 'Test' } }));
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});


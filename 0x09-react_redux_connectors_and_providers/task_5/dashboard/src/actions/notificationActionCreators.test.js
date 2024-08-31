import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notificationActionCreators', () => {
  it('should create an action to set loading state', () => {
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading: true
    };
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [{ id: 1, type: 'default', value: 'Test' }];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('should create an action to fetch notifications', () => {
    const store = mockStore({});
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, type: 'default', value: 'Test' }])
      })
    );

    const expectedActions = [
      { type: SET_LOADING_STATE, isLoading: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, notifications: [{ id: 1, type: 'default', value: 'Test' }] },
      { type: SET_LOADING_STATE, isLoading: false }
    ];

    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


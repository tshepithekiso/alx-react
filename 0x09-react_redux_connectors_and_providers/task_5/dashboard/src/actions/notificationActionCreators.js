import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './actionTypes';

// Action creator to set loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading
});

// Action creator to set notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications
});

// Thunk action creator to fetch notifications
export const fetchNotifications = () => {
  return async (dispatch) => {
    // Set loading state to true before starting the fetch
    dispatch(setLoadingState(true));

    try {
      // Fetch notifications from API
      const response = await fetch('/notifications.json');
      const data = await response.json();

      // Dispatch action to set notifications with fetched data
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Error fetching notifications:', error);
      // Optionally dispatch an error action here
    } finally {
      // Set loading state to false after fetch is complete
      dispatch(setLoadingState(false));
    }
  };
};


import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

// Initial state with loading attribute and notifications
const initialState = Map({
  loading: false,
  notifications: Map() // Initialize as an empty Map
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      // Update the loading state
      return state.set('loading', action.payload);
      
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Merge the notifications data from the API
      return state.set('notifications', state.get('notifications').mergeDeep(action.payload));
      
    default:
      return state;
  }
};

export default notificationReducer;


import { Map } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionCreators';

// Initial state
const initialState = Map({
  user: null, // User is initially set to null
  isLoggedIn: false,
  error: null,
  isNotificationDrawerVisible: false,
});

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('error', null);
      
    case LOGIN_SUCCESS:
      return state
        .set('user', action.payload) // Set user data on successful login
        .set('isLoggedIn', true);

    case LOGIN_FAILURE:
      return state.set('error', action.payload);
      
    case LOGOUT:
      return state
        .set('user', null) // Clear user data on logout
        .set('isLoggedIn', false);
      
    default:
      return state;
  }
};

export default uiReducer;


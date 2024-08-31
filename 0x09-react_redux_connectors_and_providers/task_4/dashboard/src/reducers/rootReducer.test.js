import { combineReducers } from 'redux';
import { Map } from 'immutable';
import rootReducer from './rootReducer';

// Define initial state structure
const initialState = {
  courses: Map(),
  notifications: Map(),
  ui: Map()
};

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    const state = store.getState();
    expect(state).toEqual(initialState);
  });
});


import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  const initialState = {
    courses: Map({}),
    notifications: Map({}),
    ui: Map({})
  };

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});


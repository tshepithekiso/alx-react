// task_0/dashboard/src/App/App.test.js

import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expectedProps = {
      isLoggedIn: true,
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});


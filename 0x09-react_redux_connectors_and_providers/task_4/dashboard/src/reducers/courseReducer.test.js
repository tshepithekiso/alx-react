// task_4/dashboard/src/reducers/courseReducer.test.js

import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  const initialState = fromJS({
    courses: {},
  });

  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        2: { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
        3: { id: 3, name: 'React', isSelected: false, credit: 40 },
      },
    });
    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        2: { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
        3: { id: 3, name: 'React', isSelected: false, credit: 40 },
      },
    });
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialState.setIn(['courses', 2, 'isSelected'], true);
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        2: { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
        3: { id: 3, name: 'React', isSelected: false, credit: 40 },
      },
    });
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialState.setIn(['courses', 2, 'isSelected'], false);
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});


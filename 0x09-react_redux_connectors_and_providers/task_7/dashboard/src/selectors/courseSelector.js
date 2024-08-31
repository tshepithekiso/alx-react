import { createSelector } from 'reselect';
import { List } from 'immutable';

// Selector to get all course entities
const getCourses = (state) => state.courses.get('courses', List());

export const getAllCourses = createSelector(
  [getCourses],
  (courses) => courses.valueSeq().toJS()
);


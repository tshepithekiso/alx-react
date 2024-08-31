import { Map } from 'immutable';
import { setCourses } from './courseActionCreators'; // Import setCourses action creator
import axios from 'axios';

// Action types
export const SET_COURSES = 'SET_COURSES';

// Action creators
export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses
});

// Async action creator to fetch courses
export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/courses.json'); // Adjust the path if necessary
      dispatch(setCourses(response.data));
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
};


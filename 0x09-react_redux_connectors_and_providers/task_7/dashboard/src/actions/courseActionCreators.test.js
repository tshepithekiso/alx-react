import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchCourses, setCourses } from './courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('fetchCourses action creator', () => {
  it('creates SET_COURSES after successfully fetching courses', async () => {
    // Mock data
    const courses = [
      { id: 1, name: 'Course 1', description: 'Description 1' },
      { id: 2, name: 'Course 2', description: 'Description 2' }
    ];

    axios.get.mockResolvedValue({ data: courses });

    const expectedActions = [
      { type: 'SET_COURSES', payload: courses }
    ];

    const store = mockStore({});

    await store.dispatch(fetchCourses());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('handles fetchCourses errors', async () => {
    axios.get.mockRejectedValue(new Error('Fetch failed'));

    const store = mockStore({});

    await store.dispatch(fetchCourses());

    // No action is dispatched on failure
    expect(store.getActions()).toEqual([]);
  });
});


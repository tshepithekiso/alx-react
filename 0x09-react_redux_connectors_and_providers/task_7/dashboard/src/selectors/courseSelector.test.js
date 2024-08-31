import { Map, List } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('getAllCourses Selector', () => {
  it('should return all course entities as a plain JavaScript array', () => {
    const state = {
      courses: Map({
        courses: List([
          Map({ id: 1, name: 'Course 1', description: 'Description 1' }),
          Map({ id: 2, name: 'Course 2', description: 'Description 2' }),
          Map({ id: 3, name: 'Course 3', description: 'Description 3' })
        ])
      })
    };

    const expectedResult = [
      { id: 1, name: 'Course 1', description: 'Description 1' },
      { id: 2, name: 'Course 2', description: 'Description 2' },
      { id: 3, name: 'Course 3', description: 'Description 3' }
    ];

    expect(getAllCourses(state)).toEqual(expectedResult);
  });

  it('should return an empty array if no courses are available', () => {
    const state = {
      courses: Map({
        courses: List()
      })
    };

    expect(getAllCourses(state)).toEqual([]);
  });
});


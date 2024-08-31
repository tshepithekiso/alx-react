import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('CourseList Component', () => {
  let wrapper;
  const mockFetchCourses = jest.fn();
  const mockSelectCourse = jest.fn();
  const mockUnSelectCourse = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        fetchCourses={mockFetchCourses}
        selectCourse={mockSelectCourse}
        unSelectCourse={mockUnSelectCourse}
        courses={[
          { id: '1', name: 'Course 1', description: 'Description 1', isSelected: false },
          { id: '2', name: 'Course 2', description: 'Description 2', isSelected: true }
        ]}
      />
    );
  });

  it('calls fetchCourses on mount', () => {
    expect(mockFetchCourses).toHaveBeenCalled();
  });

  it('dispatches selectCourse when a row is checked', () => {
    wrapper.instance().onChangeRow('1', true);
    expect(mockSelectCourse).toHaveBeenCalledWith('1');
  });

  it('dispatches unSelectCourse when a row is unchecked', () => {
    wrapper.instance().onChangeRow('2', false);
    expect(mockUnSelectCourse).toHaveBeenCalledWith('2');
  });
});


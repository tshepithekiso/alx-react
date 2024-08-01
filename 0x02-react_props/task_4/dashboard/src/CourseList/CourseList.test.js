// src/CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the correct number of rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});


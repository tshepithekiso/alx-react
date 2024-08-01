// src/CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';

describe('CourseList Component', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  describe('With CourseList empty', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders "No course available yet" row', () => {
      expect(wrapper.find(CourseListRow).at(2).props().textFirstCell).toBe('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(4); // 2 header rows + 3 course rows
    });

    it('renders each course row correctly', () => {
      listCourses.forEach((course, index) => {
        expect(wrapper.find(CourseListRow).at(index + 2).props().textFirstCell).toBe(course.name);
        expect(wrapper.find(CourseListRow).at(index + 2).props().textSecondCell).toBe(course.credit);
      });
    });
  });
});


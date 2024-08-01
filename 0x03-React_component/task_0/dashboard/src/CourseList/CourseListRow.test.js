// src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders a single th with colspan 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two th elements when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" textSecondCell="Subheader" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data1" textSecondCell="Data2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});


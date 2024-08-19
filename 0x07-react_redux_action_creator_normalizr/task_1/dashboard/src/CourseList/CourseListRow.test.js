import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection during testing
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
    expect(wrapper.find('th').text()).toBe('Test');
  });

  it('renders two cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Second" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe('Test');
    expect(thElements.at(1).text()).toBe('Second');
  });

  it('renders two td elements within a row when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Second" />);
    const tdElements = wrapper.find('td');
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe('Test');
    expect(tdElements.at(1).text()).toBe('Second');
  });
});


import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(wrapper.find('td').length).toBe(2);
  });

  it('applies the correct background color style for header and non-header rows', () => {
    const headerWrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const rowWrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row" textSecondCell="Row" />);

    expect(headerWrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
    expect(rowWrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});


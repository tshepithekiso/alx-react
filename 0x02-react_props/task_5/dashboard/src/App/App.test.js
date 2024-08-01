// src/App/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('displays CourseList when isLoggedIn is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoggedIn: true });
    expect(wrapper.find(CourseList)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
  });
});


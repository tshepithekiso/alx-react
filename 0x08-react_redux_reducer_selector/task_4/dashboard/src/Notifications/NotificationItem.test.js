import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection during testing
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct text for default type', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.text()).toBe('Test');
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('renders the correct text for urgent type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Test" />);
    expect(wrapper.text()).toBe('Test');
    expect(wrapper.prop('data-notification-type')).toBe('urgent');
  });

  it('renders the correct HTML when html prop is provided', () => {
    const html = { __html: '<strong>Test</strong>' };
    const wrapper = shallow(<NotificationItem type="default" html={html} />);
    expect(wrapper.html()).toContain('<strong>Test</strong>');
  });
});


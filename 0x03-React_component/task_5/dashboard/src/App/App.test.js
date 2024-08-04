// App.test.js
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders the Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders the CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('calls logOut and shows alert when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();

    // Simulate keydown event
    instance.handleKeyDown({ ctrlKey: true, key: 'h' });
    
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
});


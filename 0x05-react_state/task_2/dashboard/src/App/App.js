import React, { Component } from 'react';
import AppContext, { defaultUser } from './AppContext';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="App">
          <Header />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;


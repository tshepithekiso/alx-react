import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.toggleSubmitButton);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.toggleSubmitButton);
  }

  toggleSubmitButton() {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ enableSubmit });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.login)}>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChangePassword}
            className={css(styles.input)}
          />
          <input
            type="submit"
            value="Submit"
            disabled={!enableSubmit}
            className={css(styles.submit)}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    margin: 'auto',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'left',
  },
  input: {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '100%',
  },
  submit: {
    display: 'block',
    padding: '8px',
    width: '100%',
    backgroundColor: '#e1354b',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
});

export default Login;


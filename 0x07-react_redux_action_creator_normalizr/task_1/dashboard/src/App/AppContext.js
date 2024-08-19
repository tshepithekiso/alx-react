import React from 'react';

// Default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
export const defaultLogOut = () => {};

// Create Context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;


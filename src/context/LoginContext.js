import React from 'react';

const LoginContext = React.createContext({
  loginUser: null,
  setLoginUser: value => {}
});

export default LoginContext;
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import api from './axios/api';
import LoginContext from './context/LoginContext';

import Loading from './components/Loading/Loading';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Viewport from './components/Viewport/Viewport';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [register, setRegister] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    api.get('/auth/login')
      .then(response => {
        setLoginUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setLoading(false);
        } else {
          console.log(error);
        }
      });
  }, []);

  if (loginUser) {
    let viewport = <Viewport />;
    return (
      <LoginContext.Provider value={{loginUser, setLoginUser}}>
        <BrowserRouter>
          { viewport }
        </BrowserRouter>
      </LoginContext.Provider>
    );
  } else if (loading) {
    return (
      <Loading />
    );
  } else {
    return (
      <LoginContext.Provider value={{loginUser, setLoginUser}}>
        { register ?
          <Register setRegister={setRegister} /> :
          <Login setRegister={setRegister} />
        }
      </LoginContext.Provider>
    );
  }
}

export default App;

import React, { useContext } from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import api from '../../axios/api';
import LoginContext from '../../context/LoginContext';

const Topbar = (props) => {
  const loginContext = useContext(LoginContext);

  const logoutHandler = () => {
    api.get('/auth/logout')
      .then(response => {
        loginContext.setLoginUser(null);
        props.history.replace('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Navbar bg="white" variant="primary" className="Topbar">
      <Link to="/" className="navbar-brand ml-3"><b>Flapi</b></Link>
      <Nav className="ml-auto">
        { props.children }
        <NavLink to="/users" className="nav-link mr-3">Users</NavLink>
        <NavLink to="/profile" className="nav-link mr-3">Profile</NavLink>
        <NavLink to="/" className="nav-link mr-3" onClick={logoutHandler}>Log Out</NavLink>
      </Nav>
    </Navbar>
  );
}

export default withRouter(Topbar);

import React, { Fragment } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import Users from '../Users/Users';

const Viewport = () => {
  return (
    <Fragment>
      <Topbar>
      </Topbar>
      <Container fluid>
        <Row noGutters="true">
          <Col xs="4" sm="3" md="2">
            <Sidebar>
              <NavLink to="/dashboard" className="nav-link mt-3">Dashboard</NavLink>
            </Sidebar>
          </Col>
          <Col>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Redirect from="/" exact to="/dashboard" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Viewport;

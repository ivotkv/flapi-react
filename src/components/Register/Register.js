import React, { useContext, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import api from '../../axios/api';
import LoginContext from '../../context/LoginContext';

const Register = (props) => {
  const loginContext = useContext(LoginContext);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const updateFormState = (newState) => {
    setFormState({...formState, ...newState});
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      api.post('/auth/register', formState)
        .then(response => {
          loginContext.setLoginUser(response.data);
          props.setRegister(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
        });
    }
  };

  return (
    <Row className="h-100 align-items-center">
      <Col className="d-flex justify-content-center">
        <Card>
          <Card.Body>
            <Card.Title><b>Register</b></Card.Title>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="firstName">
                <Form.Control type="text" placeholder="First Name" value={formState.first_name}
                              onChange={event => updateFormState({first_name: event.target.value})} />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control type="text" placeholder="Last Name" value={formState.last_name}
                              onChange={event => updateFormState({last_name: event.target.value})} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder="Email" value={formState.email}
                              onChange={event => updateFormState({email: event.target.value})} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control type="password" placeholder="Password" value={formState.password}
                              onChange={event => updateFormState({password: event.target.value})} />
              </Form.Group>
              <Button variant="primary" type="submit">Register</Button>
              <Button variant="outline-primary ml-1" onClick={() => props.setRegister(false)}>Login</Button>
              { loading ? <Spinner animation="border" size="sm" className="ml-3" /> : null }
              { error ? <div className="d-inline m-3 text-danger">Failed!</div> : null }
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;

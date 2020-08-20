import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <Row className="h-100 align-items-center">
    <Col className="d-flex justify-content-center">
      <Spinner animation="border" />
    </Col>
  </Row>
);

export default Loading;
import React from 'react';

import Container from 'react-bootstrap/Container';
import ModelGrid from '../ModelGrid/ModelGrid';

const Users = (props) => {
  return (
    <Container>
      <ModelGrid model="User" cols={[
        {'title': 'Id', 'field': 'id'},
        {'title': 'Email', 'field': 'email'},
        {'title': 'First Name', 'field': 'first_name'},
        {'title': 'Last Name', 'field': 'last_name'}
      ]} />
    </Container>
  );
}

export default Users;

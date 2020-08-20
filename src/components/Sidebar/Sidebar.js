import React from 'react';

import Nav from 'react-bootstrap/Nav';

const Sidebar = (props) => {
  return (
    <Nav className="Sidebar flex-column">
      { props.children }
    </Nav>
  );
}

export default Sidebar;

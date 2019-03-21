import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class Navigation extends PureComponent {
  render () {
    return (
      <div className="navigation">
        <Nav variant="pills" fill={true} as="ul">
          <Nav.Item as="li">
            <NavLink className="nav-link" exact activeClassName="active" to="/">Dashboard</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link" exact activeClassName="active" to="/users-list">Users list</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link" exact activeClassName="active" to="/stories">Stories</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
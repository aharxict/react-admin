import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Nav extends PureComponent {
  render () {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/stories'>Stories</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
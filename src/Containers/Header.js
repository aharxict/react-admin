import React, { PureComponent } from 'react';
import Nav from '../Components/Nav'

class Header extends PureComponent {
  render () {
    return (
      <div>
      <div>Header</div>
      <Nav />
      </div>
    );
  }
}

export default Header;
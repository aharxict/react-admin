import React, { PureComponent } from 'react';
import Navigation from '../Components/Navigation'

class Header extends PureComponent {
  render () {
    return (
      <header className="header">
      <Navigation />
      <h3 className="text-center py-2">Admin area</h3>
      </header>
    );
  }
}

export default Header;
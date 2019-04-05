import React, { Component } from 'react';
import Body from './Containers/Body'
import Header from './Containers/Header'
import Footer from './Containers/Footer'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import mainStore from './Redux/Store/mainStore'
import './sccs/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTimes, faCoffee);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={mainStore}>
          <div className="main-container">
            <Header />
            <Body />
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

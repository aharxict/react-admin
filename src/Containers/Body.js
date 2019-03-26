import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import UsersList from '../Components/UsersList';
import UserDetails from '../Components/UserDetails';
import Stories from '../Components/Stories';

class Body extends PureComponent {
  render () {
    return (
      <div className="body">
        <Switch>
          <Route exact path = "/" component={Dashboard}/>
          <Route path = "/users-list/:id" component={UserDetails}/>
          <Route path = "/users-list" component={UsersList}/>
          <Route path = "/stories" component={Stories}/>
        </Switch>
      </div>
    );
  }
}

export default Body;
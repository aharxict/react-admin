import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UsersList from './UsersList';
import Stories from './Stories';

class Body extends PureComponent {
  render () {
    return (
      <div className="body">
        <Switch>
          <Route exact path = "/" component={Dashboard}/>
          <Route path = "/users-list" component={UsersList}/>
          <Route path = "/stories" component={Stories}/>
        </Switch>
      </div>
    );
  }
}

export default Body;
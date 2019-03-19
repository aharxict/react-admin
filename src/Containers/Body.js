import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Stories from './Stories';

class Body extends PureComponent {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path = "/" component={Dashboard}/>
          <Route path = "/users" component={Users}/>
          <Route path = "/stories" component={Stories}/>
        </Switch>
      </div>
    );
  }
}

export default Body;
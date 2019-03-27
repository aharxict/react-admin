import React, { PureComponent } from 'react';
import { Badge, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Breadcrumbs extends PureComponent {
  render () {
    const links = this.props.mapping.map( item => {
      if (item.href) {
        return (
          <Link key={item.name} to={item.href} className="breadcrumb-item">
            {item.name}
          </Link>
        );
      } else {
        if (item.attach) {
          return (
            <Breadcrumb.Item key={item.name} active>{item.name} - {' '}
              <Badge variant="secondary">{item.attach}
              </Badge>
            </Breadcrumb.Item>
          );
        } else {
          return (
            <Breadcrumb.Item key={item.name} active>
              {item.name}
            </Breadcrumb.Item>
          );
        }
      }
    });

    return (
      <Breadcrumb>
        {links}
      </Breadcrumb>
    );
  }
}

export default Breadcrumbs;
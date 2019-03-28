import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadDashboardPosts } from '../Redux/Actions/dashboard'
import { Table } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import LoadSpinner from './LoadSpinner';

class Dashboard extends PureComponent {
  componentWillMount() {
    this.props.loadDashboardPosts();
  }

  row = post => {
    return (
      <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
      </tr>
    );
  };

  mapping = () =>{
    return [
      {
        name: 'Home',
        href: '/',
        attach: null,
      },
    ];
  };

  render () {

    if (this.props.isLoading) {
      return (
        <div>
          <Breadcrumbs mapping={this.mapping()} />
          <LoadSpinner />
        </div>
      );
    }

    return (
      <div>
        <Breadcrumbs mapping={this.mapping()} />
        <Table striped bordered hover>
          <thead>
          <tr>
            <th className="col-xs-3">User ID</th>
            <th>Post ID</th>
            <th>Post title</th>
          </tr>
          </thead>
          <tbody>
          {this.props.data.map(item => {
            return this.row(item);
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadDashboardPosts: PropTypes.func.isRequired,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return state.dashboard;
}

export default connect(
  mapStateToProps,
  {
    loadDashboardPosts,
  }
)(Dashboard);
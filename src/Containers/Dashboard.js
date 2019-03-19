import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadDashboardPosts } from '../Redux/Actions/dashboard'
import { Table } from 'react-bootstrap';

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

  render () {
    return (
      <div>
        <div>Dashboard</div>
        <div>{this.props.isLoading ? 'Loading' : 'Loaded'}</div>
        <Table striped hover>
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
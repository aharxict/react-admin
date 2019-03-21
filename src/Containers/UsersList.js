import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUsersList } from '../Redux/Actions/usersList'
import { Table } from 'react-bootstrap';

class UsersList extends PureComponent {
  componentWillMount() {
    this.props.loadUsersList();
  }

  row = post => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.username}</td>
        <td>{post.email}</td>
        <td>{post.website}</td>
      </tr>
    );
  };

  render () {
    return (
      <div>
        <div>Users list</div>
        <div>{this.props.isLoading ? 'Loading' : 'Loaded'}</div>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th className="col-xs-3">User ID</th>
            <th>User name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          </thead>
          <tbody>
          {this.props.data.map(item => {
            return this.row(item);
          })}
          </tbody>
        </Table>
      </div>    );
  }
}

UsersList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUsersList: PropTypes.func.isRequired,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return state.usersList;
}

export default connect(
  mapStateToProps,
  {
    loadUsersList,
  }
)(UsersList);
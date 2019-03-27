import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUsersList } from '../Redux/Actions/usersList'
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import LoadSpinner from './LoadSpinner';

class UsersList extends PureComponent {
  componentWillMount() {
    this.props.loadUsersList();
  }

  row = post => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>
          <Link to={`/users-list/${post.id}`}>
            {post.username}
          </Link>
        </td>
        <td>{post.email}</td>
        <td>{post.website}</td>
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
      {
        name: 'Users list',
        href: null,
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
        <Container>
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
        </Container>
      </div>
    );
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
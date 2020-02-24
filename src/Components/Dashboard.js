import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadDashboardPosts,
  setSelectedUser
} from '../Redux/Actions/dashboard'
import { Table, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';
import LoadSpinner from './LoadSpinner';
import UserAlbums from './UserAlbums';
import Search from './Search';

class Dashboard extends PureComponent {
  componentWillMount() {
    this.props.loadDashboardPosts();
  }

  row = post => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
      </tr>
    );
  };

  mapping = () => {
    return [
      {
        name: 'Home',
        href: '/',
        attach: null,
      },
    ];
  };

  navDropdownSelectHandler = userId => {
    this.props.setSelectedUser(userId);
  };

  navDropdown = () => {
    let usersId = [];
    this.props.data.map( item => {
      return usersId = [...usersId, item.userId];
    });

    let uniqUsersId = usersId.sort((a, b) => (a - b)).reduce((accumulator, current) => {
      const length = accumulator.length;
      if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);

    return (
    <NavDropdown
      title="Select User ID"
      id="collasible-nav-dropdown"
      className="d-flex justify-content-end"
    >
      {uniqUsersId.map(item => {
        return (
          <NavDropdown.Item
            key={item}
            onClick={() => this.navDropdownSelectHandler(item)}
          >
            {item}
          </NavDropdown.Item>
          );
      })}
    </NavDropdown>
    );
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
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Search />
            </Col>
          </Row>
        </Container>
        <Container>
          {this.navDropdown()}
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Post ID</th>
              <th>Post title</th>
            </tr>
            </thead>
            <tbody>
            {this.props.data
              .filter(item => {
                return item.userId === this.props.selectedUserId
              })
              .map(item => {
                return this.row(item);
            })}
            </tbody>
          </Table>
        </Container>
        <Container>
          <UserAlbums />
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadDashboardPosts: PropTypes.func.isRequired,
  data: PropTypes.array,
  selectedUserId: PropTypes.number,
  setSelectedUser: PropTypes.func,
};

function mapStateToProps(state) {
  return state.dashboard;
}

export default connect(
  mapStateToProps,
  {
    loadDashboardPosts,
    setSelectedUser,
  }
)(Dashboard);
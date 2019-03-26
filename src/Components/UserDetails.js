import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUserDetails } from '../Redux/Actions/userDetails'
import { Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserForm from './Form/UserForm'
import LoadSpinner from './LoadSpinner';

class UserDetails extends PureComponent {
  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.loadUserDetails(id);
    }
    console.log(this.props);
  }

  breadcrumbs = () => {
    return (
      <Breadcrumb>
        <Link to="/" className="breadcrumb-item">
          Home
        </Link>
        <Link to="/users-list" className="breadcrumb-item">
          Users list
        </Link>
        <Breadcrumb.Item active>User Details - {' '}
          <Badge variant="secondary">{this.props.data.username}
          </Badge>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  render () {

    if (this.props.isLoading) {
      return <LoadSpinner />;
    }

    return (
      <div>
        {this.breadcrumbs()}
        <Container>
          <hr />
          <UserForm />
          <hr />
        </Container>
      </div>
    );
  }
}

UserDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUserDetails: PropTypes.func.isRequired,
  data: PropTypes.object,
};

function mapStateToProps(state) {
  const {
    isLoading,
    data
  } = state.userDetails;

  return {
    isLoading,
    data,
  };
}

export default connect(
  mapStateToProps,
  {
    loadUserDetails,
  }
)(UserDetails);
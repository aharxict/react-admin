import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadUserDetails,
  updateUserDetails
} from '../Redux/Actions/userDetails';
import {Badge, Breadcrumb, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserForm from './Form/UserForm'
import LoadSpinner from './LoadSpinner';
import { reduxForm } from "redux-form";

class UserDetails extends PureComponent {
  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.loadUserDetails(id);
    }
  }

  submit = values => {
    this.props.updateUserDetails(this.props.data.id, values);
  };

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
        <Form
          className="user-edit-form"
          onSubmit={this.props.handleSubmit(this.submit)}
        >
          <hr />
          <UserForm />
          <hr />
        </Form>
      </div>
    );
  }
}

UserDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUserDetails: PropTypes.func.isRequired,
  updateUserDetails: PropTypes.func.isRequired,
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
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
    updateUserDetails,
  }
)(
  reduxForm({
    form: 'userForm',
  })(UserDetails)
);

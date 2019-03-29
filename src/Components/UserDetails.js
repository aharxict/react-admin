import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadUserDetails,
  updateUserDetails
} from '../Redux/Actions/userDetails';
import { Form, Container } from 'react-bootstrap';
import UserForm from './Form/UserForm'
import LoadSpinner from './LoadSpinner';
import Breadcrumbs from './Breadcrumbs';
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

  mapping = () =>{
    return [
      {
        name: 'Home',
        href: '/',
        attach: null,
      },
      {
        name: 'Users list',
        href: '/users-list',
        attach: null,
      },
      {
        name: 'User Details',
        href: null,
        attach: this.props.data.username,
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
      <div className="user-details">
        <Breadcrumbs mapping={this.mapping()} />
        <Container>
          <Form
            className="user-edit-form"
            onSubmit={this.props.handleSubmit(this.submit)}
          >
            <div className="border-box">
              <UserForm />
            </div>
          </Form>
        </Container>
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

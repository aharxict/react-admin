import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUserDetails } from '../Redux/Actions/userDetails'
import { Badge, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import UserForm from './Form/UserForm'

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

  handleSubmit = values => {
    console.log(values);
  };

  render () {
    return (
      <div>
        {this.breadcrumbs()}
        <div>{this.props.isLoading ? 'Loading' : 'Loaded'}</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <UserForm />
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
)(
  reduxForm({
    formReducer: 'userForm',
  })(UserDetails)
);
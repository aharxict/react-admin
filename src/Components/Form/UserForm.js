import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class UserForm extends PureComponent {

  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'userForm',
  })(UserForm)
);

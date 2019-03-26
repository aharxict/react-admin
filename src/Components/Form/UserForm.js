import React, { PureComponent } from 'react';
import { Field, reduxForm, FormSection } from 'redux-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserForm extends PureComponent {
  submit = values => {
    // print the form values to the console
    console.log('submit', values);
  };

  simpleRow = (key) => {
    return (
      <Form.Group key={key} as={Row}>
        <Form.Label column sm={2}>
          <Alert variant="light">
            {key}
          </Alert>
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name={key}
            type="text"
            as={Field}
            component="input"
          />
          <Form.Text>
            Edit this field
          </Form.Text>
        </Col>
      </Form.Group>
    );
  };

  nestedRow = (key, data) => {
    return (
      <FormSection name={key} key={key}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            <Alert variant="secondary">
              {key}
            </Alert>
          </Form.Label>
          <Col sm={10}>
          </Col>
        </Form.Group>
        {
          Object.keys(data).map(key => {

            if (typeof data[key] === "object") {
              return this.nestedRow(key, data[key]);
            }
            return this.simpleRow(key);
          })
        }
      </FormSection>
    );
  };

  render() {

    return (
        <Form
          className="user-edit-form"
          onSubmit={this.props.handleSubmit(this.submit)}
        >
          {this.simpleRow('name')}
          {this.simpleRow('username')}
          {this.simpleRow('email')}
          {this.nestedRow('address', this.props.initialValues.address)}
          {this.simpleRow('phone')}
          {this.simpleRow('website')}
          {this.nestedRow('company', this.props.initialValues.company)}
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
  }
}

UserForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
};

function mapStateToProps(state) {
  const { data } = state.userDetails;

  return {
    initialValues: { ...data }
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'userForm',
  })(UserForm)
);
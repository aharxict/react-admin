import React, { PureComponent } from 'react';
import { Container, Spinner } from 'react-bootstrap';

class LoadSpinner extends PureComponent {
  render () {
    return (
      <Container className="LoadSpinner d-flex justify-content-around">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
      </Container>
    );
  }
}

export default LoadSpinner;
import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';

class Loading extends React.Component {
  render() {
    return (
      <Container className="App-loading">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner className="spinner" animation="border" role="status" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Requesting to connect</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Loading;

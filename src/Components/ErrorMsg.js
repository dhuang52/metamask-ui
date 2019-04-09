import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap';

class ErrorMsg extends React.Component {
  render() {
    return (
      <Container className="App-loading">
        <Row className="justify-content-md-center">
          <Col md="auto"><h2>{this.props.message}</h2></Col>
        </Row>
      </Container>
    )
  }
}

ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMsg;

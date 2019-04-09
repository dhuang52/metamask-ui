import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'react-bootstrap';

class Info extends React.Component {
  render() {
    return (
      <Container className="App-info">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Public address: {this.props.address}</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>{this.props.balance} ETH</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="primary" onClick={this.props.switchedAcct}>Switched Accounts?</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

Info.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  switchedAcct: PropTypes.func.isRequired
}

export default Info;

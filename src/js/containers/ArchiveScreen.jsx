//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'


class ArchiveScreen extends React.Component {

  render(){
    return (
      <Container fluid={ true }>
        <Row>
          <Col>
            <h1>Archive</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveScreen);

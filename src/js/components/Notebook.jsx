//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-grid-system'


class Notebook extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
  }

  render(){
    return (
      <Row>
        <Col>
          <div>[Notebook 1]</div>
        </Col>
      </Row>
    )
  }
}

export default Notebook;

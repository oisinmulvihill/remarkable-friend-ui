//
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-grid-system'


class Notebook extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render(){
    return (
      <Row>
        <Col>
          <div>{ this.props.data.name }</div>
        </Col>
      </Row>
    )
  }
}

export default Notebook;

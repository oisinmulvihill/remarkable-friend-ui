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
          <div className="last_modified">{ this.props.data.last_modified }</div>
        </Col>
        <Col>
          <div className="name">{ this.props.data.name }</div>
        </Col>
      </Row>
    )
  }
}

export default Notebook;

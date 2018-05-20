//
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'

class NotebookMenu extends React.Component {

  static propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onSynchronise: PropTypes.func.isRequired
  }

  render() {
    return (
      <Container fluid={ true } className="notebook-menu">
        <Row>
          <Col pull={ 2 } md={ 2 }>
            <span className="title">Local Notebooks</span>
          </Col>
          <Col push={ 10 } md={ 1 }>
            <button onClick={this.props.onRefresh}>Refresh</button>
          </Col>
          <Col md={ 1 }>
            <button onClick={this.props.onSynchronise}>Synchronise</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NotebookMenu;

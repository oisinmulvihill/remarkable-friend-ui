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
          <Col md={ 3 }>
            <span className="title">Local Notebooks</span>
          </Col>
          <Col md={ 2 }>
            <button
              onClick={this.props.onRefresh}
              title="Update the displayed local notebooks."
            >
              Refresh
            </button>
          </Col>
          <Col md={ 2 }>
            <button
              onClick={this.props.onSynchronise}
              title="Download the latest notebooks and changes from reMarkable."
            >
              Downlaod
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NotebookMenu;

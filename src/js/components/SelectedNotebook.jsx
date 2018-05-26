//
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'

class NotebookMenu extends React.Component {

  static propTypes = {
    selectedNotebook: PropTypes.object.isRequired,
  }

  render() {
    var returned = (<div />)

    if (this.props.selectedNotebook !== {}) {

      returned = (
        <Container fluid={ true } className="notebook-selected">
          <Row>
            <Col>
              <span className="title">Selected: ??</span>
            </Col>
          </Row>
        </Container>
      )
    }

    return returned
  }
}

export default NotebookMenu;

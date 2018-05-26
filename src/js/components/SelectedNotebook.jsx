//
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'

class SelectedNotebook extends React.Component {

  static propTypes = {
    selected: PropTypes.object.isRequired,
  }

  render() {
    var returned = (<div />)

    if (this.props.selected.hasOwnProperty('id')) {
      // If it has an ID it is probably an notebook object
      const notebook = this.props.selected;
      console.log("SelectedNotebook: ")
      console.log(notebook)
      const doc_id = notebook.id;
      const last_modified = notebook.last_modified;
      const images = notebook.images
      const base_url = 'http://localhost:8800/static';
      var url = ''
      var rows = []
      for (let index = 0; index < images.length; index++) {
        url = `${base_url}/${doc_id}/thumbnails/${images[index]}`;
        rows.push((
          <Row className="page">
            <Col>
              <Container fluid={ true }>
                <Row>
                  <Col>
                    <img className="image" src={ url } />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span>Page { index + 1}</span>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        ))
      }

      returned = (
        <Container fluid={ true }  className="notebook-selected-view">
          <Row>
            <Col md={ 12 }>
              <Container fluid={ true } className="heading">
                <Row>
                  <Col>
                    <span className="title">{ this.props.selected.name }</span>
                    <span>, {images.length} Page(s).</span>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
              <Container fluid={ true } className="pages">
                { rows }
              </Container>
            </Col>
          </Row>
        </Container>
      )

    } else {
      console.log("SelectedNotebook: none selected yet.")
    }

    return returned
  }
}

export default SelectedNotebook

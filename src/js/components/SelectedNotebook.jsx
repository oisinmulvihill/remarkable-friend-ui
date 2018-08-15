//
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

class SelectedNotebook extends React.Component {
  static propTypes = {
    selected: PropTypes.object.isRequired,
  }

  render() {
    let url = '';
    let rows = [];
    let returned = (<div/>);

    if (this.props.selected.hasOwnProperty('id')) {
      // If it has an ID it is probably an notebook object
      const notebook = this.props.selected;
      const docId = notebook.id;
      const images = notebook.images;
      const baseUrl = 'http://localhost:8800/static';

      for (let index = 0; index < images.length; index++) {
        url = `${baseUrl}/${docId}/thumbnails/${images[index]}`;
        rows.push((
          <Row key={index}>
            <Col md={12}>
              <Container fluid={true} className="page">
                <Row>
                  <Col md={12}>
                    <img className="image" src={url} />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <span>Page {index + 1}</span>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        ))
      }

      returned = (
        <Container fluid={true} className="notebook-selected-view">
          <Row>
            <Col md={12}>
              <Container fluid={true} className="heading">
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
            <Col md={12}>
              <Container fluid={true} className="pages">
                {rows}
              </Container>
            </Col>
          </Row>
        </Container>
      );
    }

    return returned;
  }
}

export default SelectedNotebook;

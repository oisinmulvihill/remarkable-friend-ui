//
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import Notebook from '../components/Notebook';

class NotebookListing extends React.Component {

  static propTypes = {
    selected: PropTypes.object.isRequired,
    notebooks: PropTypes.array.isRequired,
    setNotebookSelected: PropTypes.func.isRequired,
  }

  onNotebookSelect = (notebook) => {
    console.log('Notebook Selected!')
    console.log(notebook.name)
    this.props.setNotebookSelected(notebook)
  }

  render() {
    let col = 0;
    let cols = [];
    const rows = [];
    let notebook = null;
    const numberOfCols = 2;
    const selectedNotebookId = this.props.selected.id || '';
    const totalNotebooks = this.props.notebooks.length;

    if (this.props.notebooks.length) {
      for (let index = 0; index < totalNotebooks; index += 1) {
        notebook = this.props.notebooks[index];
        cols.push((
          <Col>
            <Notebook
              selected={selectedNotebookId === notebook.id}
              data={notebook}
              key={notebook.name}
              onSelect={this.onNotebookSelect}
            />
          </Col>
        ));
        col += 1;
        if (col >= numberOfCols) {
          // New row, reset columns
          rows.push((
            <Row>{cols}</Row>
          ));
          col = 0;
          cols = [];
        }
      }
    }

    return (
      <Container className="notebook-list-view" fluid={true}>
        {rows}
      </Container>
    );
  }
}

export default NotebookListing;

//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import Notebook from '../components/Notebook'
import NotebookMenu from '../components/NotebookMenu'
import SelectedNotebook from '../components/SelectedNotebook'


class NotebookScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    notebooks: PropTypes.array.isRequired,
    listNotebooks: PropTypes.func.isRequired
  }

  componentDidMount() {
    // When the page loads, kick off the local notebook recovery:
    this.props.listNotebooks()
  }

  render_notebook(item, index) {
    return (
      <Notebook data={ item } key={ item.name } />
    )
  }

  recoverNotebooks = () => {
    this.props.listNotebooks()
  }

  synchronise = () => {
    console.log('Todo Synchronise');
  }

  onNotebookSelect = (notebook) => {
    console.log('Notebook Selected!')
    console.log(notebook.name)
  }

  render() {
    let notebooks = [];

    if (this.props.notebooks.length) {
      const number_of_cols = 3
      const total_notebooks = this.props.notebooks.length
      const number_of_rows = Math.floor(total_notebooks / number_of_cols)
      let col = 0
      let rows = []
      let cols = []
      let notebook = null
      for (let index = 0; index < total_notebooks; index++) {
        notebook = this.props.notebooks[index]
        cols.push((
          <Col>
            <Notebook
              data={ notebook }
              key={ notebook.name }
              onSelect={this.onNotebookSelect}
            />
          </Col>
        ))
        col++
        if (col >= number_of_cols) {
          // New row, reset columns
          rows.push((
            <Row>{cols}</Row>
          ))
          col = 0
          cols = []
        }
      }

      notebooks = (
        <div>
          <Container fluid={ true }>
            <Row>
              <Col md={ 12 }>
                <NotebookMenu
                  onRefresh={this.recoverNotebooks}
                  onSynchronise={this.synchronise}
                />
              </Col>
            </Row>
            <Row>
              <Col md={ 9 }>
                <Container fluid={ true }>
                  {rows}
                </Container>
              </Col>
              <Col md={ 3 }>
                <SelectedNotebook />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }

    return notebooks
  }
}

const mapStateToProps = (state) => ({
  notebooks: state.apiReducer.notebooks
});

const mapDispatchToProps = {
  listNotebooks: apiActions.listNotebooks
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookScreen);

//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import * as interfaceActions from '../actions/InterfaceActions'
import Notebook from '../components/Notebook'
import NotebookMenu from '../components/NotebookMenu'
import SelectedNotebook from '../components/SelectedNotebook'


class NotebookScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    selectedNotebook: PropTypes.object.isRequired,
    notebooks: PropTypes.array.isRequired,
    listNotebooks: PropTypes.func.isRequired,
    setNotebookSelected: PropTypes.func.isRequired,
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
    this.props.setNotebookSelected(notebook)
  }

  render() {
    let notebooks = [];

    if (this.props.notebooks.length) {
      const selectedNotebookId = this.props.selectedNotebook.id || ""
      const number_of_cols = 2
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
              selected={ selectedNotebookId === notebook.id }
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
              <Col md={ 7 }>
                <Container fluid={ true }>
                  <Row>
                    <Col md={ 12 }>
                      <NotebookMenu
                        onRefresh={this.recoverNotebooks}
                        onSynchronise={this.synchronise}
                      />
                    </Col>
                    <Col md={ 12 }>
                      <Container className="notebook-list-view" fluid={ true }>
                        {rows}
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={ 5 }>
                <SelectedNotebook selected={ this.props.selectedNotebook } />
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
  selectedNotebook: state.apiReducer.selectedNotebook,
  notebooks: state.apiReducer.notebooks
});

const mapDispatchToProps = {
  setNotebookSelected: interfaceActions.notebookSelected,
  listNotebooks: apiActions.listNotebooks
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookScreen);

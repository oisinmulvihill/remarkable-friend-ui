//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import Notebook from '../components/Notebook'


class Notebooks extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    notebooks: PropTypes.array.isRequired,
    listNotebooks: PropTypes.func.isRequired
  }

  render_notebook(item, index) {
    return (
      <Notebook data={ item } key={ item.name } />
    )
  }

  recoverNotebooks = () => {
    this.props.listNotebooks()
  }

  render(){
    const header = (
      <div>
        <Row>
          <Col>
            <span className="h1">Notebooks</span>
            <button className="refresh-btn" onClick={this.recoverNotebooks}>Refresh</button>
          </Col>
        </Row>
      </div>
    )

    let notebooks = (
      <Container>{ header }</Container>
    )

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

        console.log('notebook:');
        console.log(notebook);

        cols.push((
          <Col>
            <Notebook data={ notebook } key={ notebook.name } />
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
        <Container>
          {header}
          {rows}
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);

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
    settings: PropTypes.object.isRequired,
    notebooks: PropTypes.array.isRequired,
    listNotebooks: PropTypes.func.isRequired
  }

  render_notebook(item, index) {
    return (
      <Notebook data={ item } key={ item.name } />
    )
  }

  recoverNotebooks = () => {
    this.props.listNotebooks(this.props.settings.values)
  }

  render(){
    let notebooks = (
      <Container>
        <Row>
          <Col><button onClick={this.recoverNotebooks}>Connect</button></Col>
        </Row>
      </Container>
    )

    if (this.props.notebooks.length) {
      notebooks = (
        <Container>
          <Row>
            <Col><button onClick={this.recoverNotebooks}>Refresh</button></Col>
          </Row>
          {this.props.notebooks.map(this.render_notebook)}
        </Container>
      )
    }

    return notebooks
  }
}

const mapStateToProps = (state) => ({
  settings: state.form.settings,
  notebooks: state.apiReducer.notebooks
});

const mapDispatchToProps = {
  listNotebooks: apiActions.listNotebooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);

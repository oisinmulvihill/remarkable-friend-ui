//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import Notebook from '../components/Notebook'

class Notebooks extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    let notebooks = (
      <Container>
        <Row>
          <Col>No notebooks to see 😭</Col>
        </Row>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col>Is reMarkable connected?</Col>
        </Row>
      </Container>
    )

    if (this.props.notebooks.length) {
      notebooks = [
        (<Container>)
      ]

      for (var notebook of this.props.notebooks) {
        console.log("notebook:")
        console.log(notebook)
        notebooks.push((<Notebook />))
      }

      notebooks.push((</Container>))
    }

    return notebooks
  }
}

const mapStateToProps = (state) => ({
  notebooks: state.apiReducer.notebooks
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);

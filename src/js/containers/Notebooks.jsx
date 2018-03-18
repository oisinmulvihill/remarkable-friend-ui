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


  render_notebook(item, index) {
    return (
      <Notebook data={ item } key={ item.name } />
    )
  }

  render(){
    let notebooks = (
      <Container>
        <Row>
          <Col>Nothing to see 😭 Is reMarkable connected?</Col>
        </Row>
      </Container>
    )

    if (this.props.notebooks.length) {
      notebooks = (
        <Container>
          {this.props.notebooks.map(this.render_notebook)}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);

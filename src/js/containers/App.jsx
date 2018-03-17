//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import Settings from './Settings'
import Notebooks from './Notebooks'


import app_style from '../../sass/app.scss'


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <Settings />
          </Col>
          <Col>
            <Notebooks />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

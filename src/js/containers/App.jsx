//
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as apiActions from '../actions/APIActions';
import NotebookScreen from './NotebookScreen';
import ArchiveScreen from './ArchiveScreen';
import SettingScreen from './SettingScreen';

import app_style from '../../sass/app.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Container fluid={ true } className="root">
          <Row>
            <Col md={ 1 } className="menu">
              <ul>
                <li><Link to="/">Notebooks</Link></li>
                <li><Link to="/archive">Archive</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </Col>
            <Col md={ 11 } className="screen">
              <Route exact path="/" component={NotebookScreen}/>
              <Route exact path="/archive" component={ArchiveScreen}/>
              <Route exact path="/settings" component={SettingScreen}/>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);

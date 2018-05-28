//
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Websocket from 'react-websocket';
import NotebookScreen from './NotebookScreen';
import SettingScreen from './SettingScreen';
import app_style from '../../sass/app.scss';


class App extends React.Component {
  handleData = (data) => {
    console.log('Websocket Data Channel');
    console.log(data);
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Row>
            <Col md={1} className="menu">
              <ul>
                <li><Link to='/'>Notebooks</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
              </ul>
            </Col>
            <Col md={11} className="screen">
              <Route exact path="/" component={NotebookScreen}/>
              <Route exact path="/settings" component={SettingScreen}/>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import * as apiActions from '../actions/APIActions';
import * as interfaceActions from '../actions/InterfaceActions';
import NotebookMenu from '../components/NotebookMenu';
import NotebookListing from '../components/NotebookListing';
import SelectedNotebook from '../components/SelectedNotebook';


class NotebookScreen extends React.Component {
  static propTypes = {
    selectedNotebook: PropTypes.object.isRequired,
    notebooks: PropTypes.array.isRequired,
    listNotebooks: PropTypes.func.isRequired,
    setNotebookSelected: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // When the page loads, kick off the local notebook recovery:
    this.props.listNotebooks();
  }

  recoverNotebooks = () => {
    this.props.listNotebooks();
  }

  synchronise = () => {
    console.log('Todo Synchronise');
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md={7}>
            <Container fluid={true}>
              <Row>
                <Col md={12}>
                  <NotebookMenu
                    onRefresh={this.recoverNotebooks}
                    onSynchronise={this.synchronise}
                  />
                </Col>
                <Col md={12}>
                  <NotebookListing
                    selected={this.props.selectedNotebook}
                    notebooks={this.props.notebooks}
                    setNotebookSelected={this.props.setNotebookSelected}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={5}>
            <SelectedNotebook selected={this.props.selectedNotebook} />
          </Col>
        </Row>
      </Container>
    );
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

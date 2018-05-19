//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import SettingsForm from '../components/SettingsForm'


class SettingScreen extends React.Component {
  static propTypes = {}

  componentDidMount() {
    this.props.getConfiguration()
  }

  onSave() {
  	console.log("Save config to disk.");
  }

  render() {
    return (
    	<div>
      		<SettingsForm />
            <button onClick={this.onSave}>Save</button>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
	settings: state.settings
});

const mapDispatchToProps = {
	getConfiguration: apiActions.getConfiguration,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);

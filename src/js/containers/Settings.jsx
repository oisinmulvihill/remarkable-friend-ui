//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'
import SettingsForm from '../components/SettingsForm'


class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    connectDevice: PropTypes.func.isRequired
  }

  submit = values => {
    console.log("Settings Submission")
    console.log(values)
    // Send recovered settings to connect to reMarkable:
    this.props.connectDevice(values)
  }

  render() {
    return (
      <SettingsForm
        onSubmit={ this.submit }
        connectDeviceResult={ this.props.connectDeviceResult }
        />
    )
  }

}

const mapStateToProps = (state) => ({
  connectDeviceResult: state.apiReducer.connectDeviceResult
});

const mapDispatchToProps = {
  connectDevice: apiActions.connectDevice
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

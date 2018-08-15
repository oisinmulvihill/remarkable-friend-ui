//
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as apiActions from '../actions/APIActions';
import RawSettingsForm from '../components/SettingsForm';


class SettingScreen extends React.Component {
  static propTypes = {
    getConfiguration: PropTypes.func.isRequired,
    saveConfiguration: PropTypes.func.isRequired
  }

  componentDidMount() {
    // Recover the configuration from the API service:
    this.props.getConfiguration();
  }

  saveConfiguration = () => {
    console.log('Save config to disk.');
    console.log(this.props.settings);
    //this.props.saveConfiguration(this.props.settings);
  }

  render() {
    let SettingsForm = reduxForm({
      form: 'settings',
      enableReinitialize: false,
      keepDirtyOnReinitialize: true
    })(RawSettingsForm);

    function connectSettingsToState(state) {
      return {
        // pull initial values from account reducer
        initialValues: state.apiReducer.settings
      };
    }

    SettingsForm = connect(connectSettingsToState)(SettingsForm);

    return (
      <SettingsForm onSubmit={this.saveConfiguration} />
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.apiReducer.settings
});

const mapDispatchToProps = {
  getConfiguration: apiActions.getConfiguration,
  saveConfiguration: apiActions.saveConfiguration
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);

//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'

import SettingsForm from '../components/SettingsForm'


class SettingScreen extends React.Component {

  static propTypes = {
  }

  render() {
    return (
      <SettingsForm />
    );
  }

}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);

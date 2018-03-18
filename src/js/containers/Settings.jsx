//
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'

import SettingsForm from '../components/SettingsForm'


class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
  }

  render() {
    return (
      <SettingsForm />
    )
  }

}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

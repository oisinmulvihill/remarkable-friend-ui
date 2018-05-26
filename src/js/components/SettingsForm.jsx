import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col } from 'react-grid-system'


let SettingsForm = props => {

  const { handleSubmit } = props

  return (
    <Container fluid={ true } className='settings'>
      <form onSubmit={handleSubmit}>
        <Row className='field_row'>
          <Col md={ 2 }>
            <label htmlFor="address">Address</label>
          </Col>
          <Col md={ 10 } >
            <Field name="address" component="input" type="text" />
          </Col>
        </Row>
        <Row className='field_row'>
          <Col md={ 2 }>
            <label htmlFor="port">Port</label>
          </Col>
          <Col md={ 10 }>
            <Field name="port" component="input" type="text" />
          </Col>
        </Row>
        <Row className='field_row'>
          <Col md={ 2 }>
            <label htmlFor="username">Username</label>
          </Col>
          <Col md={ 10 }>
            <Field name="username" component="input" type="username" />
          </Col>
        </Row>
        <Row className='field_row'>
          <Col md={ 2 }>
            <label htmlFor="username">Archive Directory</label>
          </Col>
          <Col md={ 10 }>
            <Field name="archive" component="input" type="archive" />
          </Col>
        </Row>
        <Row className='field_row'>
          <Col md={ 2 } offset={{ md: 3}}>
            <button
              title="Save settings changes to disk."
              type="submit"
            >
                Save
            </button>
          </Col>
        </Row>
       </form>
    </Container>
  )
}

SettingsForm = reduxForm({
  form: 'settings',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(SettingsForm);

function connectSettingsToState(state) {

  console.log('Here: ');
  console.log(state);

  const newState = {
    // pull initial values from account reducer
    initialValues: state.settings
  };

  return newState;
}

SettingsForm = connect(connectSettingsToState)(SettingsForm);

export default SettingsForm;

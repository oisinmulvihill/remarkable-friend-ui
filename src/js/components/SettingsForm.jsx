import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col } from 'react-grid-system'


let SettingsForm = props => {

  const { handleSubmit, connectDeviceResult } = props

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
       </form>
    </Container>
  )
}

SettingsForm = reduxForm({
  form: 'settings'
})(SettingsForm)

export default SettingsForm

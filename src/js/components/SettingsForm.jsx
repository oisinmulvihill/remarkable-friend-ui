import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col } from 'react-grid-system'


let SettingsForm = props => {

  const { handleSubmit, connectDeviceResult } = props

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <label htmlFor="address">Address</label>
          </Col>
          <Col>
            <Field name="address" component="input" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="password">Password</label>
          </Col>
          <Col>
            <Field name="password" component="input" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="username">Username</label>
          </Col>
          <Col>
            <Field name="username" component="input" type="username" />
          </Col>
        </Row>
       </form>
    </Container>
  )
}

SettingsForm = reduxForm({
  form: 'settings',
  initialValues: {
    address: '10.0.0.12',
    // address: '10.11.99.1',
    username: 'root',
    password: ''
  }
})(SettingsForm)

export default SettingsForm

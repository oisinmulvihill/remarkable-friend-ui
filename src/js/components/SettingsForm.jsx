//
import React from 'react';
import { Field } from 'redux-form';
import { Container, Row, Col } from 'react-grid-system';


const RawSettingsForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Container fluid={true} className="settings">
      <form onSubmit={handleSubmit}>
        <Row className="field_row">
          <Col md={2}>
            <label htmlFor="address">Address</label>
          </Col>
          <Col md={10} >
            <Field name="address" component="input" type="text" />
          </Col>
        </Row>
        <Row className="field_row">
          <Col md={2}>
            <label htmlFor="port">Port</label>
          </Col>
          <Col md={10}>
            <Field name="port" component="input" type="text" />
          </Col>
        </Row>
        <Row className="field_row">
          <Col md={2}>
            <label htmlFor="username">Username</label>
          </Col>
          <Col md={10}>
            <Field name="username" component="input" type="username" />
          </Col>
        </Row>
        <Row className="field_row">
          <Col md={2}>
            <label htmlFor="cache_dir">Local Storage Directory</label>
          </Col>
          <Col md={10}>
            <Field name="cache_dir" component="input" type="text" />
          </Col>
        </Row>
        <Row className="field_row">
          <Col md={2} offset={{md: 3}}>
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
  );
};

export default RawSettingsForm;

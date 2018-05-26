//
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-grid-system'
import * as apiActions from '../actions/APIActions'


class Notebook extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  render(){
    const doc_id = this.props.data.id;
    const last_opened = this.props.data.last_opened;
    const base_url = 'http://localhost:8800/static';
    const cover_image = this.props.data.images[0]
    const url = `${base_url}/${doc_id}/thumbnails/${cover_image}`;
    var classNames = "notebook";
    if (this.props.selected === true) {
      classNames += " selected"
    }

    return (
      <div
          className={ classNames }
          onClick={() => { this.props.onSelect(this.props.data) }}
      >
        <Row>
          <Col>
            <img className="image" src={ url } />
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="name">{ this.props.data.name }</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Notebook;

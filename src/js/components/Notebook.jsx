//
import React from 'react'
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types'
import { Row, Col } from 'react-grid-system'


class Notebook extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render(){
    const doc_id = this.props.data.id;
    const base_url = 'http://localhost:8800/static';
    const cover_image = this.props.data.images[0]
    const url = `${base_url}/${doc_id}/thumbnails/${cover_image}`;

    return (
      <div class="notebook">
        <Row>
          <Col>
            <img class="image" src={ url } />
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

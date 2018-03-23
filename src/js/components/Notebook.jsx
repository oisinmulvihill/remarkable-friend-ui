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
    return (
      <Row>
        <Col>
          <div className="pages">{ this.props.data.pages.length }</div>
        </Col>
        <Col>
          <div className="name">{ this.props.data.name }</div>
        </Col>
        <Col>
          <ReactSVG
            path={ this.props.data.pages[0] }
            callback={svg => console.log(svg)}
            className="class-name"
            wrapperClassName="wrapper-class-name"
          />
        </Col>
      </Row>
    )
  }
}

export default Notebook;

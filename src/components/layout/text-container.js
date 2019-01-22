import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

import '../theme.less'
import layoutStyles from './layout.module.css'

const TextContainer = ({ children }) => (
  <Row>
    <Col
      xs={{ span: 18, offset: 3 }}
      md={{ span: 12, offset: 6 }}
      lg={{ span: 10, offset: 7 }}
      xl={{ span: 8, offset: 8 }}
      className={layoutStyles.textContainer}
    >
      {children}
    </Col>
  </Row>
)

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextContainer

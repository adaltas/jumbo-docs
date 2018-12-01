import React, { Component } from 'react'
import { Icon } from 'antd'

import docsStyles from '../components/docs.module.css'

const ReactMarkdown = require('react-markdown')

class HintBox extends Component {
  static defaultProps = {
    type: 'info',
    text: '',
  }

  type = (function(type) {
    switch (type) {
      case 'warning':
        return docsStyles.warning
      case 'tip':
        return docsStyles.tip
      default:
        return docsStyles.info
    }
  })(this.props.type)
  icon = (type => {
    switch (type) {
      case 'warning':
        return 'warning'
      case 'tip':
        return 'check-circle'
      default:
        return 'info-circle'
    }
  })(this.props.type)

  render() {
    return (
      <div className={[docsStyles.box, this.type].join(' ')}>
        <Icon type={this.icon} theme="filled" className={docsStyles.icon} />
        <span className={docsStyles.boxContent}>
          <ReactMarkdown source={this.props.text} className={this.props.type} />
        </span>
      </div>
    )
  }
}

export default HintBox

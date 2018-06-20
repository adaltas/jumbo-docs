import React, { Component } from 'react'
import Info from '@material-ui/icons/Info'
import Warning from '@material-ui/icons/Warning'
import DoneAll from '@material-ui/icons/DoneAll'
import { withStyles } from '@material-ui/core';

import styles from './../jumbo.css'

const ReactMarkdown = require('react-markdown')

const hintBoxStyle = {
  box: {
    lineHeight: '1.4',
    padding: '1em .8em .8em .8em',
    borderRadius: '5px',
    borderBottom: '5px solid'
  },
  info: {
    backgroundColor: '#d9edf7f7',
    borderColor: '#bce8f1',
    color: '#31708f'
  },
  warning: {
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    color: '#a94442'
  },
  tip: {
    backgroundColor: '#fcf8e3',
    borderColor: '#faebcc',
    color: '#8a6d3b'
  },
  icon: {
    display: 'table-cell',
    paddingRight: '.8em',
    verticalAlign: 'top'
  },
  content: {
    display: 'table-cell'
  },
};

class HintBox extends Component {
  static defaultProps = {
    type: 'info',
    text: ''
  };

  text = this.props.text
  type = (function (type) {
    switch (type) {
      case 'info':
        return hintBoxStyle.info
      case 'warning':
        return hintBoxStyle.warning
      case 'tip':
        return hintBoxStyle.tip
    }
  })(this.props.type)
  iconComponent = (function (type) {
    switch (type) {
      case 'info': return (<Info></Info>)
      case 'warning': return (<Warning></Warning>)
      case 'tip': return (<DoneAll></DoneAll>)
    }
  })(this.props.type)

  render() {
    return (
      <div style={{ ...hintBoxStyle.box, ...this.type }}>
        <span style={hintBoxStyle.icon}>
          {this.iconComponent}
        </span>
        <span style={hintBoxStyle.content}>
          <ReactMarkdown source={this.text} className={this.props.type} />
        </span>
      </div>
    );
  }
}

export default withStyles(styles)(HintBox)
import React from 'react'
import { Button, Drawer, Icon } from 'antd'

import DocsNav from './docs-nav'

import '../theme.less'
import docsStyles from './docs.module.css'

class DocsDrawer extends React.Component {
  state = { visible: false }

  showDrawer = () => {
    this.setState({ visible: true })
  }

  closeDrawer = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div className={docsStyles.drawerDiv}>
        <Button
          shape="circle"
          type="ghost"
          onClick={this.showDrawer}
          className={docsStyles.drawerButton}
        >
          <Icon type="menu-unfold" />
        </Button>
        <Drawer
          placement="left"
          closable={false}
          visible={this.state.visible}
          onClose={this.closeDrawer}
          title={'Jumbo Docs v' + this.props.version}
        >
          <DocsNav id={this.props.id} docs={this.props.docs} />
        </Drawer>
      </div>
    )
  }
}

export default DocsDrawer

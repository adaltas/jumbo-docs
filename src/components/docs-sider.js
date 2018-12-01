import React from 'react'
import { Layout } from 'antd'

import DocsNav from './docs-nav'

import './theme.less'
import docsStyles from './docs.module.css'

const { Sider } = Layout

const DocsSider = ({ id, docs }) => (
  <Sider className={docsStyles.sider}>
    <DocsNav id={id} docs={docs} />
  </Sider>
)

export default DocsSider

import React from 'react'
import { Layout } from 'antd'

import DocsNav from './docs-nav'
import DocsNavVersion from './docs-nav-version'

import '../theme.less'
import docsStyles from './docs.module.css'

const { Sider } = Layout

const DocsSider = ({ id, docs, version }) => (
  <Sider
    className={docsStyles.sider}
    width={300}
    breakpoint={'xl'}
    collapsible={'true'}
    collapsedWidth={0}
  >
    <DocsNavVersion version={version} />
    <DocsNav id={id} docs={docs} />
  </Sider>
)

export default DocsSider

import React from 'react'
import { Layout } from 'antd'

import DocsNav from './docs-nav'
import DocsNavVersion from './docs-nav-version'

import './theme.less'
import mainStyles from './main.module.css'

const { Footer } = Layout

const MainFooter = () => (
  <Footer className={mainStyles.footer} width={300}>
    Adaltas 2019
  </Footer>
)

export default MainFooter

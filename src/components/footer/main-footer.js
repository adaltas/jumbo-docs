import React from 'react'
import { Layout, Divider } from 'antd'

import AdaltasLogo from '../icons/adaltas-logo'

import '../theme.less'
import mainStyles from './footer.module.css'

const { Footer } = Layout

const MainFooter = () => (
  <Footer className={mainStyles.footer}>
    <AdaltasLogo className={mainStyles.adaltasLogo} />
    <span>Adaltas 2019</span>
    <Divider type="vertical" />
    <span>
      <a
        href="http://github.com/adaltas/jumbo-docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Edit this page
      </a>
    </span>
  </Footer>
)

export default MainFooter

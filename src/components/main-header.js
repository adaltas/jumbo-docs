import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Layout, Affix, Menu, Icon } from 'antd'

import JumboLogoWhite from './jumbo-logo-white'

import './theme.less'
import mainStyle from './main.module.css'

const { Header } = Layout
const SubMenu = Menu.SubMenu

const MainHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            github
          }
        }
      }
    `}
    render={data => (
      <Affix offsetTop={0}>
        <Header className={mainStyle.header}>
          <Link to="/" className={mainStyle.headerLink}>
            <JumboLogoWhite className={mainStyle.headerLogo} />
            <span>{data.site.siteMetadata.title}</span>
          </Link>
          <Menu mode="horizontal" theme="dark" className={mainStyle.headerMenu}>
            <Menu.Item key="docs" className={mainStyle.headerItem}>
              <Link to="/docs/">Docs</Link>
            </Menu.Item>
            <Menu.Item key="about" className={mainStyle.headerItem}>
              <Link to="/about/">About</Link>
            </Menu.Item>
            <Menu.Item key="github" className={mainStyle.headerItem}>
              <a
                href={data.site.siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="github" />
              </a>
            </Menu.Item>
            <SubMenu
              title={<span>...</span>}
              className={mainStyle.headerItemMobile}
            >
              <Menu.Item key="mobile-docs">
                <Link to="/docs/">Docs</Link>
              </Menu.Item>
              <Menu.Item key="mobile-about">
                <Link to="/about/">About</Link>
              </Menu.Item>
              <Menu.Item key="mobile-github">
                <a href={data.site.siteMetadata.github}>
                  <Icon type="github" />
                </a>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Affix>
    )}
  />
)

export default MainHeader

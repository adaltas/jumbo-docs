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
          <Menu mode="horizontal" theme="dark" className={mainStyle.headerMenu}>
            <Menu.Item key="home">
              <Link to="/" className={mainStyle.headerLink}>
                <JumboLogoWhite className={mainStyle.headerLogo} />
                <span>{data.site.siteMetadata.title}</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="docs">
              <Link to="/docs/">Docs</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about/">About</Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/blog/">Blog</Link>
            </Menu.Item>
            <Menu.Item key="github">
              <a
                href={data.site.siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="github" />
              </a>
            </Menu.Item>
          </Menu>
        </Header>
      </Affix>
    )}
  />
)

export default MainHeader

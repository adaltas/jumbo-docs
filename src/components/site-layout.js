import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Layout, Affix } from 'antd'

import MainHeader from './main-header'

import './theme.less'
import mainStyles from './main.module.css'

const { Content, Footer } = Layout

const SiteLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout className={mainStyles.layout}>
          <MainHeader />
          <Layout>
            <Content className={mainStyles.content}>{children}</Content>
          </Layout>
          <Affix offsetBottom={0}>
            <Footer>Footer</Footer>
          </Affix>
        </Layout>
      </>
    )}
  />
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout

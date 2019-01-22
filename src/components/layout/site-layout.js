import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Layout } from 'antd'

import MainHeader from '../header/main-header'
import MainFooter from '../footer/main-footer'

import '../theme.less'
import layoutStyles from './layout.module.css'

const { Content } = Layout

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
        <Layout className={layoutStyles.layout}>
          <MainHeader />
          <Layout>
            <Content>{children}</Content>
            <MainFooter />
          </Layout>
        </Layout>
      </>
    )}
  />
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout

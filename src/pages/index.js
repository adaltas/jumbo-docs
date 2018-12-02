import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button } from 'antd'

import SiteLayout from '../components/site-layout'
import JumboShellImage from '../components/jumbo-shell-image'
import JumboLogoType from '../components/jumbo-logo-type'

import '../components/theme.less'
import indexStyles from './index.module.css'

const IndexPage = ({ data }) => (
  <SiteLayout>
    <Row>
      <Col span={18} offset={3} className={indexStyles.logoSection}>
        <span className={indexStyles.logo}>
          <JumboLogoType />
        </span>
      </Col>
    </Row>
    <Row>
      <Col span={24} className={indexStyles.logoSection}>
        <Button type="danger" size="large" className={indexStyles.mainButton}>
          <Link to="/docs/getting-started">GET STARTED</Link>
        </Button>
        <Button type="danger" size="large" className={indexStyles.mainButton}>
          <Link to="/docs/versions">
            NEW IN {data.site.siteMetadata.version}
          </Link>
        </Button>
      </Col>
    </Row>
    <div className={indexStyles.darkSection}>
      <Row>
        <Col span={12} offset={6}>
          <div className={indexStyles.shellImage}>
            <JumboShellImage />
          </div>
        </Col>
      </Row>
    </div>
  </SiteLayout>
)

export const query = graphql`
  query markdownQuery {
    site {
      siteMetadata {
        version
      }
    }
  }
`

export default IndexPage

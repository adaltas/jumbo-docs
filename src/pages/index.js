import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Divider } from 'antd'

import SiteLayout from '../components/layout/site-layout'
import TextContainer from '../components/layout/text-container'
import JumboShellImage from '../components/images/jumbo-shell-image'
import JumboLogoType from '../components/icons/jumbo-logo-type'

import '../components/theme.less'
import indexStyles from './index.module.css'

const IndexPage = ({ data }) => (
  <SiteLayout>
    <Row>
      <Col span={18} offset={3} className={indexStyles.centerSection}>
        <span className={indexStyles.logo}>
          <JumboLogoType />
        </span>
      </Col>
    </Row>
    <Row>
      <Col
        xs={{ span: 18, offset: 3 }}
        sm={{ span: 12, offset: 6 }}
        className={indexStyles.centerSection}
      >
        <div className={indexStyles.subtitle}>
          <span className={indexStyles.jumbo}>></span> describe your target
          stack
          <br />
          <span className={indexStyles.jumbo}>></span> launch the provisioning
          <br />
          <span className={indexStyles.jumbo}>></span> start developing!
          <span className={indexStyles.cursor}>█</span>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={22} offset={1} className={indexStyles.centerSection}>
        <Button type="default" size="large" className={indexStyles.mainButton}>
          <Link to="/docs/getting-started">GET STARTED</Link>
        </Button>
        <Button type="default" size="large" className={indexStyles.mainButton}>
          <Link to="/docs/versions">
            NEW IN {data.site.siteMetadata.version}
          </Link>
        </Button>
      </Col>
    </Row>
    <div className={indexStyles.darkSection}>
      <TextContainer>
        <Divider orientation="left" className={indexStyles.darkDivider}>
          What is Jumbo?
        </Divider>
        <div className={indexStyles.darkAnswer}>
          Jumbo is a Hadoop cluster bootstrapper made for developers. It helps
          you deploy virtualize development environments very quickly.
          <br />
          Jumbo is Open Source and comes with a friendly CLI to help you out
          during your cluster configuration!
        </div>
      </TextContainer>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
        >
          <div className={indexStyles.shellImage}>
            <JumboShellImage />
          </div>
        </Col>
      </Row>
      <TextContainer>
        <Divider orientation="right" className={indexStyles.darkDivider}>
          How does it work?
        </Divider>
        <div className={indexStyles.darkAnswer}>
          Jumbo leverages trusted DevOps tools to provision the clusters:{' '}
          <a
            href="https://www.vagrantup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vagrant
          </a>{' '}
          to manage VMs,{' '}
          <a
            href="https://www.ansible.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ansible
          </a>{' '}
          to configure them and{' '}
          <a
            href="https://ambari.apache.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ambari
          </a>{' '}
          to install the Hadoop services on them. It is also possible to
          kerberize the cluster with{' '}
          <a
            href="https://www.freeipa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeIPA
          </a>
          .
        </div>
      </TextContainer>
      <TextContainer>
        <Divider orientation="left" className={indexStyles.darkDivider}>
          Why use Jumbo?
        </Divider>
        <div className={indexStyles.darkAnswer}>
          Jumbo is very easy to use and let you build multi-node kerberized
          Hadoop development environments. It is an ideal tool to help
          developers come closer to production to test and progress!
        </div>
      </TextContainer>
      <TextContainer>
        <Divider orientation="right" className={indexStyles.darkDivider}>
          Like what you see?
        </Divider>
        <div className={indexStyles.darkAnswer}>
          Jumbo is an active project and we would love to have your feedback!
          Don't hesitate to post issues on the{' '}
          <a
            href="http://github.com/adaltas/jumbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            project page
          </a>{' '}
          if needed or to get in touch for any support!
        </div>
      </TextContainer>
    </div>
  </SiteLayout>
)

export const query = graphql`
  query versionQuery {
    site {
      siteMetadata {
        version
      }
    }
  }
`

export default IndexPage

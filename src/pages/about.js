import React from 'react'

import SiteLayout from '../components/layout/site-layout'
import TextContainer from '../components/layout/text-container'

import aboutStyles from './about.module.css'

const SecondPage = ({ data }) => (
  <SiteLayout>
    <TextContainer>
      <div>
        <h1 className={aboutStyles.aboutTitle}>About Jumbo</h1>
        <p className={aboutStyles.aboutParagraph}>
          Jumbo is an Open Source project hosted on{' '}
          <a
            href={data.site.siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          that was developed at Adaltas by two interns who had to gain
          experience with the Hadoop ecosystem.
        </p>
        <p className={aboutStyles.aboutParagraph}>
          It is a CLI tool written in Python. It offers an abstraction layer
          that allows any user, experienced or not with Big Data technologies,
          to describe a cluster that has to be provisioned. It then generates
          scripts and leverages trusted DevOps tools to provision the cluster.
        </p>
      </div>
    </TextContainer>
  </SiteLayout>
)

export const query = graphql`
  query githubQuery {
    site {
      siteMetadata {
        github
      }
    }
  }
`
export default SecondPage

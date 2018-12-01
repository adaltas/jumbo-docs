import React from 'react'
import { graphql } from 'gatsby'
import { Button } from 'antd'

import SiteLayout from '../components/site-layout'
import Image from '../components/jumbo-shell-image'
import indexStyles from './index.module.css'

const IndexPage = ({ data }) => (
  <SiteLayout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={indexStyles.shellImage}>
      <Image />
    </div>
    <Button>Default</Button>
  </SiteLayout>
)

export const query = graphql`
  query markdownQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage

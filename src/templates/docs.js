import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'antd'
import rehypeReact from 'rehype-react'

import DocsSider from '../components/docs/docs-sider'
import MainHeader from '../components/header/main-header'
import MainFooter from '../components/footer/main-footer'
import DocsDrawer from '../components/docs/docs-drawer'
import HintBox from '../components/docs/docs-hint-box'

import '../components/theme.less'
import docsStyles from '../components/docs/docs.module.css'

require('prismjs/themes/prism-tomorrow.css')

const { Content } = Layout
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'hint-box': HintBox,
  },
}).Compiler

const DocTemplate = ({ data }) => {
  const currentDoc = data.markdownRemark
  const docs = data.allMarkdownRemark
  const docsVersion = data.site.siteMetadata.version
  return (
    <Layout hasSider={true}>
      <DocsSider id={currentDoc.id} docs={docs} version={docsVersion} />
      <Layout className={docsStyles.docsLayout}>
        <MainHeader />
        <Content>
          <div className={docsStyles.markdown}>
            {renderAst(currentDoc.htmlAst)}
          </div>
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      id
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___sort }) {
      edges {
        node {
          id
          frontmatter {
            title
            sort
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        version
      }
    }
  }
`

export default DocTemplate

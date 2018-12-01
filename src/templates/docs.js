import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'antd'
import rehypeReact from 'rehype-react'

import DocsSider from '../components/docs-sider'
import MainHeader from '../components/main-header'
import DocsDrawer from '../components/docs-drawer'
import HintBox from '../components/docs-hint-box'

import docsStyles from '../components/docs.module.css'

require('prismjs/themes/prism-tomorrow.css')

const { Content } = Layout
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'hint-box': HintBox },
}).Compiler

const DocTemplate = ({ data }) => {
  const currentDoc = data.markdownRemark
  const docs = data.allMarkdownRemark
  return (
    <Layout>
      <DocsSider id={currentDoc.id} docs={docs} />
      <DocsDrawer id={currentDoc.id} docs={docs} />
      <Layout className={docsStyles.docsLayout}>
        <MainHeader />
        <Content>
          <div className={docsStyles.markdown}>
            {renderAst(currentDoc.htmlAst)}
          </div>
        </Content>
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
  }
`

export default DocTemplate

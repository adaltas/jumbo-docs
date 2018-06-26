import React from 'react'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import HintBox from './../layouts/shared/HintBox'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "hint-box": HintBox },
}).Compiler;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  updateLayoutFunction,
}) {
  const { page } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = page
  // updateLayoutFunction({path: markdownRemark.fields.slug})
  return (
    <div>
      <Helmet
        title={'Jumbo - ' + frontmatter.title}
        meta={[
          { name: 'description', content: frontmatter.description },
          { name: 'keywords', content: frontmatter.keywords },
        ]}
      />
      {
        renderAst(htmlAst)
      }
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    page: markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

# Jumbo Website

The official Jumbo website based on Gatsby and Material-UI.

To install and run the server:

```
git clone https://github.com/adaltas/jumbo-docs.git jumbo-docs
cd jumbo-docs
npm install
./node_modules/.bin/gatsby develop
```

## Request

From [GraphQL UI](http://localhost:8000/___graphql)

Query to display a page :

```
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
# Query variable
{"path": "/blog/my-first-post"}
```

```
query BlogPostByPath($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } } ) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
# Query variable
{"slug": "/about/contribute/"}
```

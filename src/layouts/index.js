import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'typeface-roboto'

import { withStyles } from '@material-ui/core/styles'
import withRoot from './mui/withRoot'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'

import AppBar from './shared/AppBar'
import Content from './shared/Content'
import Drawer from './shared/Drawer'
import Footer from './shared/Footer'
import Menu from './shared/Menu'
// Gatsby
import Link from 'gatsby-link'
// Particles
import jum from './home/jumbo-clear.png'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  content: {
    width: '100%',
    fontFamily: 'roboto',
    fontSize: '20px',
  },
  subHeading: {
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    margin: theme.spacing.unit,
  },
  outlined: {
    borderColor: '#7ec699',
    color: '#7ec699',
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  buttonLink: {
    color: '#ffffff00'
  },
  jumboBig: {
    textAlign: 'center',
    height: '500px',
    paddingTop: '150px',
    backgroundImage: 'linear-gradient(#2B2D42b8, #2B2D42)',
    color: '#f0f7f4',
  },
  jumboImg: {
    maxHeight: '111px',
    maxWidth: '80%'
  }
})

class Layout extends React.Component {
  state = {
    drawerOpen: true
  }
  render() {
    const { children, classes, data } = this.props
    const site = data.site.siteMetadata
    const onToggle = () => {
      this.setState({ drawerOpen: !this.state.drawerOpen })
    }
    const menu = { children: {} }
    data.menu.edges.map(edge => {
      const slugs = edge.node.fields.slug.split('/').filter(part => part)
      let parentMenu = menu
      slugs.map(slug => {
        if (!parentMenu.children[slug]) parentMenu.children[slug] = { data: {}, children: {} }
        parentMenu = parentMenu.children[slug]
      })
      parentMenu.data = {
        id: slugs.join('/'),
        title: edge.node.frontmatter.title,
        slug: edge.node.fields.slug,
        sort: edge.node.frontmatter.sort || 99
      }
    })
    return (
      <div className={classes.root}>
        <Helmet
          title={site.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Hidden mdUp>
          <AppBar
            ref={child => {
              this.appbar = child
            }}
            open={!this.state.drawerOpen}
            onMenuClick={onToggle}
            site={site}
            opacity={0.3}
          />
        </Hidden>
        <Hidden smDown implementation="css">
          <AppBar
            ref={child => {
              this.appbar = child
            }}
            open={!this.state.drawerOpen}
            onMenuClick={onToggle}
            site={site}
            opacity={0.3}
          />
        </Hidden>
        <Hidden mdUp>
          <Drawer
            open={!this.state.drawerOpen}
            onClickShadow={onToggle}
            variant="temporary"
          >
            {
              Object.values(menu.children)
                .sort((p1, p2) => p1.data.sort > p2.data.sort)
                .map(page => <Menu key={page.data.slug} menu={page} path={this.state.path} />)
            }
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            open={!this.state.drawerOpen}
            onClickShadow={onToggle}
            variant="persistent"
          >
            {
              Object.values(menu.children)
                .sort((p1, p2) => p1.data.sort > p2.data.sort)
                .map(page => <Menu key={page.data.slug} menu={page} path={this.state.path} />)
            }
          </Drawer>
        </Hidden>
        <div ref="content" className={classes.content}>
          <div className={classes.jumboBig} >
            <span className={classes.content}>
              <img src={jum} className={classes.jumboImg} />
              <p className={classes.subHeading} >{'A local Hadoop cluster bootstrapper for developers'}</p>
              <p className={classes.subHeading}>{'Deploy virtualized clusters in minutes with Jumbo CLI'}</p>
              <Link to="/getting-started/" className={classes.buttonLink}>
                <Button
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  classes={{ outlined: classes.outlined }}
                >
                  {'Get started'}
                </Button>
              </Link>
              <Link to="/overview/versions" className={classes.buttonLink}>
                <Button
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  classes={{ outlined: classes.outlined }}
                >
                  {'New in 0.4.1'}
                </Button>
              </Link>
            </span>
          </div>
          <Content>{children()}</Content>
          <Footer site={site} />
        </div>
      </div>
    )
  }
}

export default withRoot(withStyles(styles, { withTheme: true })(Layout))

export const query = graphql`
  query IndexQuery {
    site: site {
      siteMetadata {
        title
        github {
          url
          title
        }
        footer {
          title
          content
          links {
            label
            url
          }
        }
      }
    }
    menu: allMarkdownRemark(
      filter: { frontmatter: { disabled: { eq: false } }, fields: { slug: { regex: "/^/.+/" } } }
      sort: { order: ASC, fields: [frontmatter___sort] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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

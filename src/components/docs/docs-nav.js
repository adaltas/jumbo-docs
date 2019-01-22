import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'antd'

import '../theme.less'
import docsStyles from './docs.module.css'

const SubMenu = Menu.SubMenu

class DocsNav extends React.Component {
  findCurrentSection = () => {
    var slugLength = 2
    if (
      this.props.docs.edges.find(e => {
        return e.node.id === this.props.id
      }).node.fields.slug === 'docs/'
    ) {
      slugLength = 1
    }

    return this.state.docsSections.some(s => {
      return (
        this.props.docs.edges
          .find(e => {
            return e.node.id === this.props.id
          })
          .node.fields.slug.split('/')
          .slice(0, slugLength)
          .join('/') === s.slug
      )
    })
      ? [
          this.state.docsSections.find(s => {
            return (
              this.props.docs.edges
                .find(e => {
                  return e.node.id === this.props.id
                })
                .node.fields.slug.split('/')
                .slice(0, slugLength)
                .join('/') === s.slug
            )
          }).id,
        ]
      : []
  }

  compareSections = (s1, s2) => {
    if (s1.frontmatter.sort > s2.frontmatter.sort) return 1
    if (s2.frontmatter.sort > s1.frontmatter.sort) return -1
    return 0
  }

  constructor(props) {
    super(props)
    this.state = {
      docsSections: [],
      currentSectionId: '',
    }

    var rootDocs = []

    props.docs.edges.forEach(e => {
      const nodeSection = e.node.fields.slug.split('/')[1]

      if (Object.keys(e.node.fields.slug.split('/')).length <= 2) {
        rootDocs.push(e.node)
      } else {
        if (!this.state.docsSections.some(s => s.name === nodeSection)) {
          this.state.docsSections.push({
            name: nodeSection,
            slug: 'docs/' + nodeSection,
            frontmatter: {
              sort: 0,
            },
            nodes: [],
          })
        }
        this.state.docsSections
          .find(s => {
            return s.name === nodeSection
          })
          .nodes.push(e.node)
      }
    })

    rootDocs.forEach(n => {
      if (
        this.state.docsSections.some(s => {
          return s.slug === n.fields.slug
        })
      ) {
        this.state.docsSections.find(s => {
          return s.slug === n.fields.slug
        }).id = n.id
        this.state.docsSections.find(s => {
          return s.slug === n.fields.slug
        }).title = n.frontmatter.title
        this.state.docsSections.find(s => {
          return s.slug === n.fields.slug
        }).frontmatter.sort += n.frontmatter.sort
        this.state.docsSections
          .find(s => {
            return s.slug === n.fields.slug
          })
          .nodes.unshift(n)
      } else {
        this.state.docsSections.push(n)
      }
    })

    this.state.docsSections = this.state.docsSections.sort(this.compareSections)
  }

  render() {
    return (
      <Menu
        mode="inline"
        selectedKeys={[this.props.id]}
        defaultOpenKeys={this.findCurrentSection()}
      >
        {this.state.docsSections.map(s => {
          if (s.nodes !== undefined) {
            return (
              <SubMenu key={s.id} title={s.title}>
                {s.nodes.map(n => (
                  <Menu.Item key={n.id}>
                    <Link
                      to={'/' + n.fields.slug}
                      className={docsStyles.navItem}
                    >
                      {n.frontmatter.title}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={s.id}>
                <Link to={'/' + s.fields.slug} className={docsStyles.navItem}>
                  {s.frontmatter.title}
                </Link>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    )
  }
}

export default DocsNav

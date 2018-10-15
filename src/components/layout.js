import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import ogImage from '../assets/meta/profile.jpeg'
import '../styles/index.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="FullStack Developer, building creative webpages"
          />
          <meta
            name="keywords"
            content="React, Node, JS, JavaScript, FullStack, Front-end, Back-end, Developer, API"
          />
          <meta property="og:url" content="https://alcidesrafael.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:description"
            content="FullStack Developer, building creative webpages"
          />
          <meta property="og:image" content={ogImage} />
          <meta
            property="og:alt"
            content="FullStack Developer, building creative webpages"
          />
          <meta property="og:type" content="image/jpeg" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

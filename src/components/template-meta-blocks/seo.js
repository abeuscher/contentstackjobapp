/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ pageMeta }) {
  return (
    <Helmet
      htmlAttributes={"en"}
      title={pageMeta.page_title}
      titleTemplate={`%s | ${pageMeta.page_title}`}
      meta={[
        {
          name: `description`,
          content: pageMeta.page_description,
        },
        {
          property: `og:title`,
          content: pageMeta.og_title || pageMeta.page_title,
        },
        {
          property: `og:description`,
          content: pageMeta.og_description || pageMeta.page_description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:thumb`,
          content: pageMeta.og_thumb.url,
        },
        {
          property: `twitter:image`,
          content: pageMeta.twitter_thumb.url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@Contentstack",
        },
        {
          name: `twitter:title`,
          content: pageMeta.twitter_title || pageMeta.page_title,
        },
        {
          name: `twitter:description`,
          content: pageMeta.twitter_description || pageMeta.page_description,
        },
      ].concat(pageMeta)}
    />
  )
}

SEO.defaultProps = {
  pageMeta: []
}

SEO.propTypes = {
  pageMeta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO

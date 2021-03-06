/*
   Custom SEO Block for contentstack.com. Expects to be passed the property "pageMeta"
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const defaultPageData = {
  page_title: "Contentstack",
  page_description: "A Modern Content Management System",
  defaultThumb: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg",
  defaultURL: "https://applicationforcontentstack.xyz"
}
const defaultMeta = [{
  property: `og:type`,
  content: `website`,
},
{
  name: `twitter:card`,
  content: `summary`,
},
{
  name: `twitter:creator`,
  content: "@Contentstack",
}]


function SEO({ pageMeta, url }) {

  const thisMeta = Object.assign({}, defaultPageData, pageMeta)
  const thisThumb = thisMeta.page_thumb ? thisMeta.page_thumb.url : thisMeta.defaultThumb
  return (
    <Helmet
      title={thisMeta.page_title}
      titleTemplate={`Contentstack | ${thisMeta.page_title}`}
      meta={[
        {
          name: `description`,
          content: thisMeta.page_description,
        },
        {
          property: `og:title`,
          content: thisMeta.opengraph_title || thisMeta.page_title,
        },
        {
          property: `og:description`,
          content: thisMeta.opengraph_description || thisMeta.page_description,
        },
        {
          property: `twitter:title`,
          content: thisMeta.twitter_title || thisMeta.page_title,
        },
        {
          property: `twitter:description`,
          content: thisMeta.twitter_description || thisMeta.page_description,
        },
        {
          property: `og:image`,
          content: thisThumb,
        },
        {
          property: `twitter:image`,
          content: thisThumb,
        },
        {
          property: `og:url`,
          content: url ? defaultPageData.defaultURL + url : defaultPageData.defaultURL,
        },
        {
          name: "robots",
          content: "noindex"
        }
      ].concat(defaultMeta)}
    >
      <html lang="en" />
    </Helmet>
  )
}

SEO.defaultProps = {
  pageMeta: {}
}

SEO.propTypes = {
  pageMeta: PropTypes.object
}

export default SEO

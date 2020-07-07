/*
   Custom SEO Block for contentstack.com. Expects to be passed the property "pageMeta"
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const defaultPageData = {
  page_title:"Contentstack",
  page_description:"A Modern Content Management System",
  page_thumb:"https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg"
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


function SEO({ pageMeta }) {

  const thisMeta = Object.assign({},defaultPageData,pageMeta)

  return (
    <Helmet
      htmlAttributes={"en"}
      title={thisMeta.page_title}
      titleTemplate={`%s | ${thisMeta.page_title}`}
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
          name: `twitter:title`,
          content: thisMeta.twitter_title || thisMeta.page_title,
        },
        {
          name: `twitter:description`,
          content: thisMeta.twitter_description || thisMeta.page_description,
        },
        {
          name: `og:thumb`,
          content: thisMeta.page_thumb,
        },
        {
          name: `twitter:image`,
          content: thisMeta.page_thumb,
        }
      ].concat(defaultMeta)}
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
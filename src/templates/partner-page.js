/*

  Partner Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"

const PartnerPage = ({ pageContext }) => {

  return (
    <Layout>
      <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
    </Layout>
  )
}

export default PartnerPage
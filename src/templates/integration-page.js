/*

  Integration Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import IntegrationHero from "../components/integrations-page-hero/integrations-page-hero"

const IntegrationPage = ({ pageContext }) => {

  return (
    <Layout>
      <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
      <IntegrationHero data={pageContext.about_section} />
    </Layout>
  )
}

export default IntegrationPage
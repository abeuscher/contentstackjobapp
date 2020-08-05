/*

  Integration Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import IntegrationHero from "../components/integrations-page-hero/integrations-page-hero"
import IntegrationsOverview from "../components/integrations-overview/integrations-overview"
import IntegrationsUseCases from "../components/integrations-use-cases/integrations-use-cases"
import IntegrationsSetupSection from "../components/integrations-setup-section/integrations-setup-section"
import IntegrationsBottomSection from "../components/integrations-bottom-section/integrations-bottom-section"

const IntegrationPage = ({ pageContext }) => {

  return (
    <Layout>
      <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
      <IntegrationHero data={pageContext.about_section} />
      <IntegrationsOverview data={pageContext.overview_section} />
      <IntegrationsUseCases data={pageContext.use_cases_section} />
      <IntegrationsSetupSection data={pageContext.setup_section} />
      <IntegrationsBottomSection data={pageContext.bottom_section} />
    </Layout>
  )
}

export default IntegrationPage
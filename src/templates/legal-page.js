/*

  Legal Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import HeroInner from "../components/hero-inner/hero-inner"
import LegalPageContent from "../components/legal-page-content/legal-page-content"


const LegalPage = ({ pageContext }) => {
  const heroObj = {
    header: pageContext.hero_section.title,
    header_bg: pageContext.hero_section.background_image,
  }
  return (
    <Layout>
      <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
      <HeroInner data={heroObj} />
      <LegalPageContent content={pageContext.content} />
    </Layout>
  )
}

export default LegalPage
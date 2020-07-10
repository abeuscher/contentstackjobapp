/*

  Business CMS Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import BusinessSEO from "../components/template-meta-blocks/business-cms-meta"
import BusinessHero from "../components/hero-inner/business-cms-page-hero"
import BusinessSubNav from "../components/sub-nav/business-cms-sub-nav"
import BusinessIconSection from "../components/features-icon-section/business-icon-section"
import BusinessDiagramSection from "../components/developers-diagram-section/business-diagram-section"
import BusinessLogoGarden from "../components/business-cms-logo-garden/business-cms-logo-garden"
import BusinessQuoteSection from "../components/business-quote-section/business-quote-section"
import BusinessBottomCTA from "../components/bottom-cta/business-cms-bottom-cta"

const BusinessCmsPage = () => (
  <Layout>
    <BusinessSEO/>
    <BusinessHero/>
    <BusinessSubNav/>
    <BusinessIconSection/>
    <BusinessDiagramSection/>
    <BusinessLogoGarden/>
    <BusinessQuoteSection/>
    <BusinessBottomCTA/>
  </Layout>
)


export default BusinessCmsPage

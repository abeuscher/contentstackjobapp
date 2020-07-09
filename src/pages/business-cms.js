/*

  Business CMS Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import BusinessSEO from "../components/template-meta-blocks/business-cms-meta"
import BusinessHero from "../components/hero-inner/business-cms-page-hero"
import BusinessSubNav from "../components/sub-nav/business-cms-sub-nav"
import BusinessIconSection from "../components/features-icon-section/business-icon-section"

const BusinessCmsPage = () => (
  <Layout>
    <BusinessSEO/>
    <BusinessHero/>
    <BusinessSubNav/>
    <BusinessIconSection/>
  </Layout>
)


export default BusinessCmsPage

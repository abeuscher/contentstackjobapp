/*

  Features Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import FeaturesMeta from "../components/template-meta-blocks/features-meta"
import FeaturesHero from "../components/hero-inner/features-page-hero"
import FeaturesTopTabs from "../components/features-top-tabs/features-top-tabs"
import FeaturesOptimizationSection from "../components/features-icon-section/features-optimization-section"
import FeaturesEnterpriseSection from "../components/features-icon-section/features-enterprise-section"
import FeaturesIntegrationSection from "../components/features-icon-section/features-integration-section"
import FeaturesOmnichannelSection from "../components/features-omnichannel-section/features-omnichannel-section"
import FeaturesBottomCTA from "../components/bottom-cta/features-bottom-cta"

const IndexPage = () => (
  <Layout>
    <FeaturesMeta/>
    <FeaturesHero/>
    <FeaturesTopTabs/>
    <FeaturesOptimizationSection/>
    <FeaturesEnterpriseSection/>
    <FeaturesIntegrationSection/>
    <FeaturesOmnichannelSection/>
    <FeaturesBottomCTA/>
  </Layout>
)


export default IndexPage

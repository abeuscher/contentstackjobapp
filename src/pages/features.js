/*

  Features Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import FeaturesMeta from "../components/template-meta-blocks/features-meta"
import FeaturesHero from "../components/hero-inner/features-page-hero"
import FeaturesTopTabs from "../components/features-top-tabs/features-top-tabs"


const IndexPage = () => (
  <Layout>
    <FeaturesMeta/>
    <FeaturesHero/>
    <FeaturesTopTabs/>
  </Layout>
)


export default IndexPage

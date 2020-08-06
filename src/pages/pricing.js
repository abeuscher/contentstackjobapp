/*

  Pricing Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"
import PricingMeta from "../components/template-meta-blocks/pricing-meta"
import PricingHero from "../components/hero-inner/pricing-hero"

const PricingPage = () => (
  <Layout>
    <PricingMeta/>
    <PricingHero/>
  </Layout>
)


export default PricingPage

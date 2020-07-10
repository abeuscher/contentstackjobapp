/*

  Partners Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import PartnersMeta from "../components/template-meta-blocks/partners-main-meta"
import PartnersMainHero from "../components/hero-inner/partners-main-hero"
import PartnersLogoLine from "../components/scrolling-logo-line/partners-logo-line"
import PartnersMainContent from "../components/partners-main-content/partners-main-content"
import PartnersBottomCTA from "../components/bottom-cta/partners-main-bottom-cta"

const PartnersPage = () => (
  <Layout>
      <PartnersMeta/>
      <PartnersMainHero/>
      <PartnersLogoLine/>
      <PartnersMainContent/>
      <PartnersBottomCTA/>
  </Layout>
)


export default PartnersPage

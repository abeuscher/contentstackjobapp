/*

  Find a Partner Page Layout

*/


import React from "react"

import Layout from "../../components/layout/layout.js"
import FindPartnerMeta from "../../components/template-meta-blocks/find-a-partner-meta"
import FindPartnerHero from "../../components/hero-inner/find-a-partner-hero"
import FindPartnerTileSection from "../../components/find-partner-tile-section/find-partner-tile-section"

const FindPartnerPage = () => (
  <Layout>
      <FindPartnerMeta/>
      <FindPartnerHero/>
      <FindPartnerTileSection/>
  </Layout>
)


export default FindPartnerPage

/*

  Integrations Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"
import IntegrationsMainMeta from "../components/template-meta-blocks/integrations-main-meta"
import IntegrationsMainHero from "../components/hero-inner/integrations-main-hero"
import IntegrationsTileSection from "../components/integrations-tile-section/integrations-tile-section"

const IntegrationsMainPage = () => (
  <Layout>
    <IntegrationsMainMeta/>
    <IntegrationsMainHero/>
    <IntegrationsTileSection/>
  </Layout>
)


export default IntegrationsMainPage

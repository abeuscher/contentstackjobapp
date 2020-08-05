/*

  CMS Guides Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"
import CmsGuideMainMeta from "../components/template-meta-blocks/cms-guides-main-meta"
import CmsGuidesHero from "../components/hero-inner/cms-guides-main-hero"
import CmsGuidesMainTopSection from "../components/cms-guides-main-top-section/cms-guides-main-top-section"
import CmsGuideMainTileSection from "../components/cms-guides-tiles-section/cms-guide-tiles-section"

const CmsGuidesMainPage = () => (
  <Layout>
    <CmsGuideMainMeta/>
    <CmsGuidesHero/>
    <CmsGuidesMainTopSection/>
    <CmsGuideMainTileSection/>
  </Layout>
)


export default CmsGuidesMainPage

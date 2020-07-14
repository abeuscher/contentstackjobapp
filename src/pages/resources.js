/*

  Resources Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import ResourcesMeta from "../components/template-meta-blocks/resources-main-meta"
import ResourcesHero from "../components/hero-inner/resources-main-hero" 
import ResourcesGrid from "../components/resources-grid/resources-grid"

const ResourcesMainPage = () => (
  <Layout>
      <ResourcesMeta/>
      <ResourcesHero/>
      <ResourcesGrid/>
  </Layout>
)


export default ResourcesMainPage

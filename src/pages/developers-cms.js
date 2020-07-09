/*

  Developers Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import DevSEO from "../components/template-meta-blocks/developers-meta"
import DevelopersHero from "../components/hero-inner/developers-page-hero"
import DevelopersSubNav from "../components/sub-nav/developers-sub-nav"
import DevelopersIconSection from "../components/features-icon-section/developers-icon-section"
import DevelopersDiagramSection from "../components/developers-diagram-section/developers-diagram-section"
import DevelopersLanguageSection from "../components/developers-language-section/developers-language-section"
import DevelopersTestimonialSection from "../components/developers-testimonial-section/developers-testimonial-section"
import DevelopersBottomCTA from "../components/bottom-cta/developers-bottom-cta"

const IndexPage = () => (
  <Layout>
      <DevSEO/>
      <DevelopersHero/>
      <DevelopersSubNav/>
      <DevelopersIconSection/>
      <DevelopersDiagramSection/>
      <DevelopersLanguageSection/>
      <DevelopersTestimonialSection/>
      <DevelopersBottomCTA/>
  </Layout>
)


export default IndexPage

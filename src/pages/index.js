/*

  Homepage Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import HomeMeta from "../components/template-meta-blocks/home-meta"
import HomeHero from "../components/home-hero/home-hero"
import ScrollingLogoLine from "../components/scrolling-logo-line/home-logo-line"
import HomeWhySection from "../components/home-why-section/home-why-section"
import HomeFeaturesSection from "../components/home-features-section/home-features-section"
import HomeAnimatedTabs from "../components/home-animated-tabs/home-animated-tabs"
import HomeDeliverySection from "../components/home-delivery-section/home-delivery-section"
import HomeTestimonialSection from "../components/home-testimonial-section/home-testimonial-section"
import HomeResourcesSection from "../components/home-recommended-resources/home-recommended-resources"

const IndexPage = () => (
  <Layout>
    <HomeMeta/>
    <HomeHero/>
    <ScrollingLogoLine/>
    <HomeWhySection/>
    <HomeFeaturesSection/>
    <HomeAnimatedTabs/>
    <HomeDeliverySection/>
    <HomeTestimonialSection/>
    <HomeResourcesSection/>
  </Layout>
)


export default IndexPage

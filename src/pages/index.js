import React from "react"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import Hero from "../components/home-hero/home-hero"
import LogoFlipper from "../components/logo-flipper/logo-flipper"
import WhySection from "../components/home-why-section/home-why-section"
import SilhouetteSection from "../components/home-silhouette-section/home-silhouette-section"
import HomeAnimatedTabs from "../components/home-animated-tabs/home-animated-tabs"
import HomeDeliverSection from "../components/home-delivery-section/home-deliver-section"
import HomeTestimonialSection from "../components/home-testimonial-section/home-testimonial-section"
import HomeBottomCTA from "../components/home-bottom-cta/home-bottom-cta"
import RecommendedResourcesSection from "../components/home-recommended-resources/home-recommended-resources"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <LogoFlipper />
    <WhySection/>
    <SilhouetteSection />
    <HomeAnimatedTabs />
    <HomeDeliverSection />
    <HomeTestimonialSection />
    <RecommendedResourcesSection />
    <HomeBottomCTA/>
  </Layout>
)


export default IndexPage

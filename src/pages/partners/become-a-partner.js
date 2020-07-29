/*

  Become a Partner Page Layout

*/


import React from "react"

import Layout from "../../components/layout/layout.js"
import BecomePartnerMeta from "../../components/template-meta-blocks/become-a-partner-meta"
import BecomePartnerHero from "../../components/hero-inner/become-a-partner-hero"
import BecomePartnerTopSection from "../../components/become-partner-top-section/become-partner-top-section"
import BecomePartnerIconSection from "../../components/features-icon-section/become-partner-icon-section"
import BecomePartnerLogoLine from "../../components/scrolling-logo-line/become-partner-logo-line"
import BecomePartnerBottomCta from "../../components/bottom-cta/become-partner-bottom-cta"

const BecomePartnerPage = () => (
  <Layout>
    <BecomePartnerMeta />
    <BecomePartnerHero />
    <BecomePartnerTopSection />
    <BecomePartnerIconSection />
    <BecomePartnerLogoLine />
    <BecomePartnerBottomCta />
  </Layout>
)


export default BecomePartnerPage

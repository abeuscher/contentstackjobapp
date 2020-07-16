/*

  Customer Success Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import CsMeta from "../components/template-meta-blocks/customer-success-meta"
import CsHero from "../components/big-hero/customer-success-hero"
import CsVideoSection from "../components/video-section/customer-success-video-section"
import CsFeaturedCustomers from "../components/customer-success-featured-customers/customer-success-featured-customers"
import CsCommitmentSection from "../components/customer-success-commitment-section/customer-success-commitment-section"
import CsIconSection from "../components/features-icon-section/customer-success-icon-section"
import CsBadgeSection from "../components/customer-success-badges/customer-success-badges"

const CustomerSuccessPage = () => (
  <Layout>
      <CsMeta/>
      <CsHero/>
      <CsVideoSection/>
      <CsFeaturedCustomers/>
      <CsCommitmentSection/>
      <CsIconSection/>
      <CsBadgeSection/>
  </Layout>
)


export default CustomerSuccessPage

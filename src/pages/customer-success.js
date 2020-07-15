/*

  Customer Success Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import CsMeta from "../components/template-meta-blocks/customer-success-meta"
import CsHero from "../components/big-hero/customer-success-hero"
import CsVideoSection from "../components/video-section/customer-success-video-section"
import CsFeaturedCustomers from "../components/customer-success-featured-customers/customer-success-featured-customers"

const CustomerSuccessPage = () => (
  <Layout>
      <CsMeta/>
      <CsHero/>
      <CsVideoSection/>
      <CsFeaturedCustomers/>
  </Layout>
)


export default CustomerSuccessPage

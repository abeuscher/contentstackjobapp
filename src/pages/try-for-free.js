/*

  Contact Us Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import TryForFreeMeta from "../components/template-meta-blocks/try-for-free-meta"
import TryForFreeForm from "../components/form-with-copy/try-for-free-form"

const ContactUsPage = () => (
  <Layout>
    <TryForFreeMeta />
    <TryForFreeForm />
  </Layout>
)


export default ContactUsPage

/*

  Contact Us Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import RequestDemoMeta from "../components/template-meta-blocks/request-demo-meta"
import RequestDemoForm from "../components/form-with-copy/request-demo-form"

const ContactUsPage = () => (
    <Layout>
        <RequestDemoMeta />
        <RequestDemoForm/>
    </Layout>
)


export default ContactUsPage

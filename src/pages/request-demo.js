/*

  Contact Us Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import ContactMeta from "../components/template-meta-blocks/contact-us-meta"
import ContactPageContent from "../components/contact-page/contact-page"

const ContactUsPage = () => (
    <Layout>
        <ContactMeta />
        <ContactPageContent/>
    </Layout>
)


export default ContactUsPage

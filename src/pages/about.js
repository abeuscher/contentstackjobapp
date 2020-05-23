import React from "react"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import "../common-css/styles.scss"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="interior">
        <h1>About Page</h1>
    </div>
  </Layout>
)


export default AboutPage

import React from "react"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import "../common-css/styles.scss"


const DemoPage = () => (
  <Layout>
    <SEO title="Demo" />
    <div className="interior">
        <h1>Demo</h1>
    </div>
  </Layout>
)


export default DemoPage

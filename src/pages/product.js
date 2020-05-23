import React from "react"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import "../common-css/styles.scss"


const ProductPage = () => (
  <Layout>
    <SEO title="Product" />
    <div className="interior">
        <h1>Product</h1>
    </div>
  </Layout>
)


export default ProductPage

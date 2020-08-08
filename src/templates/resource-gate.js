/*

  Resource Gate Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import ResourceGateContent from "../components/resource-gate-content/resource-gate-content"

const ResourceGate = ({ pageContext }) => {
    return (
        <Layout>
            <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
            <ResourceGateContent data={pageContext} />

        </Layout>
    )
}

export default ResourceGate
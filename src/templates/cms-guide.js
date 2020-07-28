/*

  CMS Guide Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"

const CmsGuide = ({ pageContext }) => {

    return (
        <Layout>
            <p>{JSON.stringify(pageContext)}</p>
        </Layout>
    )
}

export default CmsGuide
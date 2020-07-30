/*

  Press Article Layout

*/

import React from "react"

import Layout from "../components/layout/layout"


const PressArticle = ({ pageContext }) => {

    return (
        <Layout>
            <h2>{pageContext.title}</h2>
        </Layout>
    )
}

export default PressArticle